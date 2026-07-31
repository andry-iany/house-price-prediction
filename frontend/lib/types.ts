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

  picture_id?: number
  seller_id: number
  seller_name: string
  seller_email: string
}

export type Filter = {
  minPrice?: number
  maxPrice?: number
}

export type CreateSeller = {
  email: string
  name: string
  password: string
}

export type CreateHouseDetail = {
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

  picture_id?: number
}
