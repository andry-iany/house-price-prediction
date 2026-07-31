import { getCurrentlyLoggedInUser } from "@/lib/authUtil"
import { CreateHouseDetail, SellerService } from "@/lib/SellerService"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

// get house by seller
export async function GET() {
  const email = await getCurrentlyLoggedInUser()
  if (!email) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 })
  }

  const houses = await sellerService.getHouses(email)
  return NextResponse.json({ houses: houses || [] }, { status: 200 })
}

// create house
export async function POST(request: Request) {
  const email = await getCurrentlyLoggedInUser()
  if (!email) {
    return NextResponse.json({ error: "Access denied" }, { status: 401 })
  }

  const params = (await request.json()) as CreateHouseDetail
  await sellerService.createHouseDetail(email, params)
  return NextResponse.json({ success: true }, { status: 200 })
}
