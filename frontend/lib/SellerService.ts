import bcrypt from "bcryptjs"
import { db } from "./db"

type Seller = {
  id: number
  name: string
  email: string
  password_hash?: string
}

type CreateSeller = {
  email: string
  name: string
  password: string
}

export class SellerService {
  async createSeller(sellerDetail: CreateSeller): Promise<Seller> {
    let seller = this.getSellerByEmail(sellerDetail.email)
    console.log({ seller })
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
    console.log({ created_seller: this.getSellerByEmail(seller.email) })

    return {
      name: seller.name,
      id: seller.id,
      email: seller.email,
    }
  }

  getSellerByEmail(email: string) {
    const query = db.prepare("SELECT * FROM seller WHERE email = ?")
    return query.get(email) as Seller | undefined
  }
}
