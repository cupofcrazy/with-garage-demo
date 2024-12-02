'use client'

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { BanknotesIcon, DocumentTextIcon, HeartIcon, PaperAirplaneIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import * as Dialog from "@radix-ui/react-dialog";
import { CheckIcon, ShareIcon, UserIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { Carousel } from "./carousel";
import { cn, convertToFeetInches, formatNumber } from "@/lib/utils";
import { type Listing } from "@/types";
import { InputSlider } from "./ui/slider";


interface ListingInfoProps {
  listing: Listing;
}

// Listing Option
const Option = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
  return (
    <button 
      className="flex items-center gap-2 bg-white hover:bg-neutral-50 transition-all duration-200 text-sm text-neutral-600 p-4">
      {icon}
      {label}
    </button>
  )
}

// Listing Feature
const ListingFeature = ({ icon, label ,value }: { icon: React.ReactNode, label: string, value: string | number }) => {
  return (
    <div className="flex flex-col gap-1 p-4 bg-neutral-100 rounded-xl text-neutral-700">
      {icon}
      <p className="text-md md:text-md lg:text-lg text-neutral-500 font-medium">{label}</p>
      <p className="text-xl md:text-xl lg:text-2xl text-neutral-700 font-semibold">{value}</p>
    </div>
  )
}

const Category = ({ label }: { label: string }) => {
  return (
    <Link 
      href="#" 
      className="text-xs md:text-xs text-accent font-medium px-3 py-2 bg-[#f974161e] rounded-full inline-block">{label}</Link>
  )
}


export function ListingInfo({ listing }: ListingInfoProps) {
  const [price, setPrice] = useState(listing.sellingPrice)
  const [showBar, setShowBar] = useState(false)
  const [isCarouselOpen, setIsCarouselOpen] = useState(false)
  const listingRef = useRef<HTMLDivElement>(null)
  
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!listingRef.current) return
    setShowBar(latest > listingRef.current.offsetTop + listingRef.current.offsetHeight - 100)
  })

  const scrollToView = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="">
      <div ref={listingRef} className="flex flex-col lg:flex-row items-start gap-4">
        <div className="relative w-full lg:flex-[1] overflow-hidden">
          <div className="relative grid grid-cols-1 gap-2 rounded-lg overflow-hidden">
            <div className="relative">
              <Image className="w-full aspect-[4/3] object-cover" src={listing.imageUrls[0]} alt={listing.listingTitle} width={800} height={800} />
            </div>
            <div className="relative grid grid-cols-2 gap-2">
              {listing.imageUrls.slice(1, 3).map((image, index) => (
                <Image key={index} className="w-full aspect-[1] object-cover" src={image} alt={listing.listingTitle} width={800} height={800} />
              ))}
            </div>

            {/* Carousel */}
            <Dialog.Root open={isCarouselOpen} onOpenChange={setIsCarouselOpen}>
              <Dialog.Trigger asChild>
                <Button 
                  onClick={() => setIsCarouselOpen(true)}
                  className="w-fit px-4 py-2 bg-white text-neutral-700 absolute bottom-4 right-4 active:bg-neutral-100">
                  {"View All Photos"}
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="carousel-overlay fixed inset-0 bg-black/50 z-[9999]" />
                <Dialog.Content className="carousel-content fixed top-0 left-0 w-full h-full bg-neutral-900 rounded-lg shadow-lg p-4 z-[9999]">
                  <Dialog.Title className="sr-only">View All Photos</Dialog.Title>
                  <Dialog.Description className="sr-only">View All Photos</Dialog.Description>
                  <Carousel 
                    images={listing.imageUrls} 
                    onClose={() => setIsCarouselOpen(false)} 
                  />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            
          </div>
        </div>

        {/* Listing Info */}
        <div className="w-full lg:flex-[1]">
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <Category label="Fire Trucks" />
            <Category label="Engines and Pumpers" />
            <Category label="Pumps" />
          </div>
          
          <div className="flex flex-col gap-2 my-2"> 
            <h1 className="text-2xl font-medium">{listing.listingTitle}</h1>
            <h2 className="my-2 text-4xl font-medium text-neutral-700">${listing.sellingPrice.toLocaleString()}</h2>
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <UserIcon className="w-12 h-12 text-neutral-500 rounded-full bg-neutral-100 p-2" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                <CheckIcon className="w-3 h-3 text-white" strokeWidth={4} />
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Listed by John Doe</p>
                <p className="text-sm text-neutral-600">Verified Seller</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-neutral-600">
                  <ShareIcon className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-1 text-sm text-neutral-600">
                  <HeartIcon className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm my-4 text-neutral-700">Freight, financing, and warranty available</p>
          
          <div className="flex items-center gap-4 my-4">
            <Button className="md:text-md" variant="secondary">{"Make an Offer"}</Button>
            <Button className="md:text-md" variant="secondary">{"Contact Seller"}</Button>
          </div>
          <Button className="md:text-md" variant="primary">{"Buy Now"}</Button>
          
          {/* Options */}
          <div className="flex flex-col border border-neutral-200 rounded-3xl p-4 gap-4 my-4">
            <InputSlider 
              step="100"
              min={0}
              max={listing.sellingPrice} 
              value={price} 
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
            />
            <div className="flex-[2] focus-within:border-neutral-300 flex items-center font-light tracking-wide shadow-sm select-none overflow-hidden w-full rounded-2xl border border-neutral-200 focus:border-neutral-300 focus-within:ring focus-within:ring-neutral-100 text-base/normal text-black placeholder:text-neutral-500 placeholder:font-light transition-hoseflow">
              <div className="w-1/2 flex items-center">
                <div className="text-neutral-500 pl-4">$</div>
                <input 
                  type="text" 
                  className="font-light tracking-wide focus:outline-none focus:ring-0 block w-full px-4 py-3 border-none" 
                  value={formatNumber(price)}
                  onChange={(e) => {
                    if (e.target.value === '') {
                      setPrice(0);
                    } else {
                      const value = e.target.value.replace(/[^0-9]/g, '');
                      setPrice(parseInt(value));
                    }
                  }}
                />
              </div>
              <button className="font-medium text-base/normal w-1/2 py-3 px-4 transition-hoseflow hover:bg-neutral-50 transition-hoseflow border-l border-neutral-200">Make offer</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 divide-neutral-200 rounded-2xl gap-[1px] overflow-hidden my-4">
            <Option icon={<ShieldCheckIcon className="w-4 h-4" />} label="Warranty Calculator" />
            <Option icon={<DocumentTextIcon className="w-4 h-4" />} label="Instant freight quote" />
            <Option icon={<BanknotesIcon className="w-4 h-4" />} label="Apply for financing options" />
            <Option icon={<PaperAirplaneIcon className="w-4 h-4" />} label="Get PDF invoice" />
          </div>
        </div>

      </div>
      
      {/* Key Highlights */}
      <section className="my-8 scroll-mt-44" id="key-highlights">
        <h3 className="text-2xl font-semibold text-accent">Key Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
          {listing.itemBrand && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Brand" value={listing.itemBrand} />}
          {listing.itemAge && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Model Year" value={listing.itemAge} />}
          {listing.itemLength && listing.itemLength > 0 && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Length" value={convertToFeetInches(listing.itemLength)} />}
          {listing.itemWidth && listing.itemWidth > 0 && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Width" value={formatNumber(listing.itemWidth)} />}
          {listing.itemHeight && listing.itemHeight > 0 && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Height" value={convertToFeetInches(listing.itemHeight)} />}
          {listing.itemWeight && listing.itemWeight > 0 && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Weight" value={formatNumber(listing.itemWeight)} />}
          {listing.pumpSize && listing.pumpSize > 0 && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Pump size" value={formatNumber(listing.pumpSize)} />}
          {listing.mileage && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Mileage" value={`${formatNumber(listing.mileage)} miles`} />}
          {listing.tankSize && <ListingFeature icon={<DocumentTextIcon className="w-4 h-4" />} label="Tank size" value={`${formatNumber(listing.tankSize)} gal`} />}
        </div>
      </section>

      {/* Details */}
      <section className="scroll-mt-44" id="details">
        <h3 className="text-2xl font-semibold mt-2 text-accent">Details</h3>
        <div>
          <p>
            {listing.listingDescription.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Listing Bar */}
      <div className={cn('hidden md:block fixed top-[72px] left-0 right-0 w-full bg-white border-b border-neutral-200 z-50 transition-all duration-200', {
        'translate-y-[-100%] opacity-0': !showBar,
        'translate-y-[0px] opacity-100': showBar
      })}>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="h-full flex items-start md:items-center gap-4 p-4">
            <Image 
              className="rounded-lg shadow-sm w-20 aspect-[4/3]" 
              src={listing.imageUrls[0]} 
              alt={listing.listingTitle} 
              width={100} 
              height={100} 
              sizes="100px"
            />
            <div className="flex flex-col gap-0">
              <p className="text-md md:text-lg font-semibold">{listing.listingTitle}</p>
              <p className="text-lg md:text-xl font-semibold text-accent">{listing.sellingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
            </div>
          </div>
          <div className="flex items-center p-4 gap-4 border-l border-neutral-200">
            <div className="flex items-center gap-4">
              <button aria-label="Share"><ShareIcon className="w-6 h-6" /></button>
              <button aria-label="Save"><HeartIcon className="w-6 h-6" /></button>
            </div>
            <button className="bg-accent w-56 h-12 text-white px-4 py-2 rounded-lg font-medium">{"Contact Seller"}</button>
          </div>
        </div>
        <hr className="" />
        <div className="p-4">
          <div className="flex items-center gap-4">
            <button onClick={() => scrollToView('key-highlights')} className="text-sm text-accent font-semibold">Key Features</button>
            <button onClick={() => scrollToView('details')} className="text-sm text-accent font-semibold">Details</button>
            <button onClick={() => scrollToView('related-listings')} className="text-sm text-accent font-semibold">You May Also Like</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}
