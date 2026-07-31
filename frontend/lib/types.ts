export type HouseDetail = {
  id: number
  price: number
  description: string

  area: number
  bedrooms: number
  bathrooms: number
  stories: number
  mainroad: boolean
  guestroom: boolean
  basement: boolean
  hotwaterheating: boolean
  airconditioning: boolean
  parking: number
  prefarea: boolean
  furnishingstatus: string

  pictureId?: number
  sellerId: number
  sellerName: string
}

export type Filter = {
  minPrice?: number
  maxPrice?: number
}
