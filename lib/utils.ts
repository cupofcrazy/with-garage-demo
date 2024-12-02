import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number);
}

export const convertToFeetInches = (inches: number) => {
  const feet = Math.floor(inches / 12)
  const remainingInches = inches % 12
  return `${feet}' ${remainingInches}"`
}

export const listingIds = [
  'd9d1813f-3b66-468b-999f-0dfa5a6d9b96',
  '5599504b-62cd-4ab2-8256-86df18574d05',
  '47ac72ac-95ab-48af-86a9-b1642434b123',
  'aa9c23a5-648a-4b17-b1af-98a60e2d9066',
  '583f7500-c888-47a9-9570-f24a495adaf2',
  'e0d30579-36ee-49bb-8434-1964b92b3d39'
]