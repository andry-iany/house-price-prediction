import { db } from "@/lib/db"
import { SellerService } from "@/lib/SellerService"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

async function dummyLogin() {
  const sellers = [
    { email: "jammy@gmail.com", password: "12345" },
    { email: "jammy@gmail.com", password: "1234523" },
    { email: "jammynotfound@gmail.com", password: "12345" },
  ]

  for (const seller of sellers) {
    try {
      const info = await sellerService.login(seller.email, seller.password)
      console.log(info)
    } catch (e) {
      console.log("Error for seller", seller)
    }
  }
}

export async function POST(request: Request) {
  const { email, password } = await request.json()

  if (!email || !password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const res = await sellerService.login(email, password)

  if (!res.authenticated) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const cookiesObj = await cookies()
  cookiesObj.set("session", email, { httpOnly: true })

  return NextResponse.json({ success: true })
}
