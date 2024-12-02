import { listingIds } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen py-4">
      <h1 className="text-2xl font-semibold text-accent">Featured Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listingIds.slice(0, 3).map((id, index) => (
          <div key={id}>
            <Link href={`/listing/${id}`}>
              <h2>Example Listing {index + 1}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
