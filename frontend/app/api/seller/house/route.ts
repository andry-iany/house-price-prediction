import { getCurrentlyLoggedInUser } from "@/lib/authUtil"
import { SellerService } from "@/lib/SellerService"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

// get house by seller
export async function GET() {
  const email = await getCurrentlyLoggedInUser()
  if (email) {
    const houses = await sellerService.getHouses(email)
    return NextResponse.json({ houses: houses || [] }, { status: 200 })
  } else {
    return NextResponse.json({ error: "Access denied" }, { status: 401 })
  }
}

// create house
export async function POST(request: Request) {
  const { email, password } = await request.json()
}
