import Image from "next/image";
import { notFound } from "next/navigation";
import { ListingInfo } from "@/components/listing-info";
import { getListing, getRelatedListings } from "@/actions/listing";
import { formatPrice } from "@/lib/utils";
import { Metadata } from "next";


export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const data = await getListing(params.id);
  const listing = data.result.listing;

  if (!listing) {
    return notFound()
  }

  return {
    title: listing.listingTitle,
    description: listing.listingDescription,
  };
};

export default async function ListingPage({ params }: { params: { id: string } }) {
  const data = await getListing(params.id);
  const listing = data.result.listing;
  const relatedListings = await getRelatedListings()
  
  if (!listing) {
    return notFound()
  }

  return (
    <div className="w-full h-auto">
      <ListingInfo listing={listing} />

      {/* Related Listings */}
      <section id="related-listings" className="scroll-mt-48">
        <h3 className="text-2xl font-semibold text-accent mb-4">Related Listings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedListings.map(listing => (
            <div key={listing.id}>
              <div className="relative w-full h-auto aspect-[4/3] rounded-xl overflow-hidden">
                <Image className="w-full h-full object-cover" src={listing.imageUrls[0]} alt={listing.listingTitle} fill />
              </div>
              <div className="mt-2">
                <p className="font-semibold mt-2">{listing.listingTitle}</p>
                <p className="text-sm text-gray-500 mt-1">{formatPrice(listing.sellingPrice)}</p>
              </div>
            </div>
          ))}
        </div>
          
      </section>
    </div>
  );
}
