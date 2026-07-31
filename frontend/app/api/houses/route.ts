import { db } from "@/lib/db"
import { SellerService } from "@/lib/SellerService"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

export async function GET() {
  const data = { message: "Hello world" }
  console.log({ db })

  //   dummyCreate()

  return NextResponse.json(data, { status: 200 })
}

function dummyCreate() {
  const sellerDetail = {
    name: "jammy",
    email: "jammy@gmail.com",
    password: "12345",
  }

  const seller = sellerService.createSeller(sellerDetail)
}

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()

//     return NextResponse.json({ success: true, received: body }, { status: 201 })
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
//   }
// }
