import type { Root } from "@/types";
import { headers } from "next/headers";

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

  console.log(BASE_URL)

  const ids = [
    `5599504b-62cd-4ab2-8256-86df18574d05`,
    `47ac72ac-95ab-48af-86a9-b1642434b123`,
    `aa9c23a5-648a-4b17-b1af-98a60e2d9066`,
    `583f7500-c888-47a9-9570-f24a495adaf2`,
    `e0d30579-36ee-49bb-8434-1964b92b3d39`
  ]

  const urls = ids.map(id => `${BASE_URL}/api/listing/${id}`)

  const items = await Promise.all(urls.map(url => fetch(url, {
      method: "POST",
    }).then(res => res.json()))) as Root[]

  const relatedListings = items.map(item => item.result.listing)

  return relatedListings
}