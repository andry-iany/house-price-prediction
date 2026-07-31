import bcrypt from "bcryptjs"
import { db } from "./db"

export type Seller = {
  id: number
  name: string
  email: string
  password_hash?: string
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

export class SellerService {
  async createSeller(sellerDetail: CreateSeller): Promise<Seller> {
    let seller = this.getSellerByEmail(sellerDetail.email)
    if (seller) {
      throw new Error("User already exists.")
    }

    const password = bcrypt.hashSync(sellerDetail.password, 10)
    const createQuery = db.prepare(
      "INSERT INTO seller (name, email, password_hash) VALUES (?, ?, ?)"
    )
    createQuery.run(sellerDetail.name, sellerDetail.email, password)

    seller = this.getSellerByEmail(sellerDetail.email)
    if (!seller) {
      throw new Error("Unexpected error happened")
    }

    return {
      name: seller.name,
      id: seller.id,
      email: seller.email,
    }
  }

  async login(email: string, password: string) {
    const seller = this.getSellerByEmail(email)
    if (!seller) {
      throw new Error("User not found")
    }

    const isPasswordValid = bcrypt.compareSync(
      password,
      seller.password_hash || ""
    )

    return {
      authenticated: isPasswordValid,
    }
  }

  async createHouseDetail(sellerEmail: string, houseDetail: CreateHouseDetail) {
    const seller = this.getSellerByEmail(sellerEmail)

    if (!seller) {
      throw new Error("Seller not found")
    }

    const params = { ...houseDetail, seller_id: seller.id }

    const createQuery = db.prepare(`
          INSERT INTO house (
            price, area, bedrooms, bathrooms, stories, parking, 
            furnishingstatus, mainroad, guestroom, basement, 
            hotwaterheating, airconditioning, prefarea, description, 
            picture_id, seller_id
          ) VALUES (
            :price, :area, :bedrooms, :bathrooms, :stories, :parking, 
            :furnishingstatus, :mainroad, :guestroom, :basement, 
            :hotwaterheating, :airconditioning, :prefarea, :description, 
            :picture_id, :seller_id);
          `)
    createQuery.run(params)
  }

  async getHouses(email?: string) {
    const sql = `
        select house.*, seller.name as seller_name, seller.email as seller_email
        from house 
        inner join seller 
        on seller.id = house.seller_id
        where 
          :email is null 
          or seller_id in (select id from seller where email = :email);
      `
    const res = db.prepare(sql).all({ email: email || null }) as
      | Seller[]
      | undefined

    return res
  }

  getSellerByEmail(email: string) {
    const query = db.prepare("SELECT * FROM seller WHERE email = ?")
    return query.get(email) as Seller | undefined
  }
}
