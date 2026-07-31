import { SellerService } from "@/lib/SellerService"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

export async function GET() {
  const session = await cookies().then((obj) => obj.get("session"))

  if (session?.value) {
    const houses = await sellerService.getHouses(session?.value)
    return NextResponse.json({ houses: houses || [] }, { status: 200 })
  } else {
    return NextResponse.json({ error: "Access denied" }, { status: 401 })
  }
}
