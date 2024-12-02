"use client"

import { useCallback, useEffect, useState } from "react"; 
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";


interface CarouselProps {
  images: string[]; 
  onClose?: () => void;
}

const Carousel = ({ images, onClose }: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'keepSnaps'
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onThumbClick = useCallback((index: number) => {
    if (!emblaApi || !thumbsApi) return;
    emblaApi?.scrollTo(index);
  }, [emblaApi, thumbsApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi || !thumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    thumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, thumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi || !thumbsApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on('reInit', onSelect);
  }, [emblaApi, thumbsApi, onSelect]);

  return (
    <div className="relative flex flex-col h-full gap-2">
      <div className="slide-number absolute top-2 left-2 z-10 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm font-medium">
        <span className="text-sm font-medium">{selectedIndex + 1}</span>
        <span className="text-sm font-medium">/{images.length}</span>
      </div>
      <button onClick={() => {
        if (onClose) {
          onClose();
        }
      }} className="absolute top-2 right-2 z-10 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 text-white text-sm font-medium">Close</button>
      <div ref={emblaRef} className="embla relative overflow-hidden rounded-lg group flex-1 flex items-center justify-center">
        {/* Slides */}
        <div className="embla__container flex w-full">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] flex justify-center items-center min-w-0">
              <Image
                className="max-h-[640px] object-contain" 
                src={image} 
                alt="logo" 
                width={1000} 
                height={1000}
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollPrev}
          className="embla__prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeftIcon className="w-4 h-4 text-white" strokeWidth={3} />
        </button>
        <button
          onClick={scrollNext}
          className="embla__next absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-xl p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRightIcon className="w-4 h-4 text-white" strokeWidth={3} />
        </button>
      </div>
      {/* Thumbnails */}
      <div ref={thumbsRef} className="embla overflow-hidden">
        <div className="embla__container flex gap-2">
          {images.map((image, index) => (
            <button 
            onClick={() => onThumbClick(index)}
            key={image} 
            className={cn("relative rounded-lg overflow-hidden w-20 h-14 flex-[0_0_auto] min-w-0 group opacity-80", {
              "box-shadow-sm border border-accent opacity-100": selectedIndex === index
            })}
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Image className="w-full h-full object-cover" src={image} alt="listing" width={100} height={100} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
};

export { Carousel };
