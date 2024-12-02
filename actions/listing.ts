import type { Root } from "@/types";
import { headers } from "next/headers";
import { listingIds } from "@/lib/utils";
export const getListing = async (id: string): Promise<Root> => {
  const headerList = headers()
  const domain = headerList.get("host")
  const BASE_URL = `http://${domain}`


  const res = await fetch(`${BASE_URL}/api/listing/${id}`, {
    method: "POST",
  }); 
  const data = await res.json();
  return data as Root;
}

export const getRelatedListings = async () => {
  const headerList = headers()
  const domain = headerList.get("host")
  const BASE_URL = `http://${domain}`

  const urls = listingIds.map(id => `${BASE_URL}/api/listing/${id}`)

  const items = await Promise.all(urls.map(url => fetch(url, {
      method: "POST",
    }).then(res => res.json()))) as Root[]

  const relatedListings = items.map(item => item.result.listing)

  return relatedListings
}