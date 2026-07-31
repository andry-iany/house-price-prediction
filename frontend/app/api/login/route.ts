import { db } from "@/lib/db"
import { SellerService } from "@/lib/SellerService"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

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
