import { SellerService } from "@/lib/SellerService"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

export async function GET() {
  const houses = await sellerService.getHouses()
  return NextResponse.json({ houses: houses || [] }, { status: 200 })
}
