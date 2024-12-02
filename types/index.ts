export interface Root {
  result: Result
  error: string
}

export interface Result {
  listing: Listing
}

export interface Listing {
  id: string
  createdAt: string
  updatedAt: string
  listingTitle: string
  sellingPrice: number
  imageUrls: string[]
  listingStatus: number
  tags: any[]
  categories: number[]
  itemBrand: string
  listingDescription: string
  itemAge: number
  itemLength: number
  itemWidth: number
  itemHeight: number
  itemWeight: number
  addressPrimary: string
  addressSecondary: string
  addressCity: string
  addressZip: string
  addressState: string
  mileage: number
  hasServiceRecords: boolean
  hasRust: boolean
  isFourWheelDrive: any
  tankSize: number
  pumpSize: number
  hasPumpTest: boolean
  aerialLength: any
  isAuction: any
  expirationDate: any
  finalPrice: any
  vin: any
  userId: string
  user: User
}

export interface User {
  id: string
  email: string
}
