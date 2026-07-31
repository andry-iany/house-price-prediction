import { db } from "@/lib/db"
import { SellerService } from "@/lib/SellerService"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

export async function GET() {
  const data = { message: "Hello world" }

  dummyCreateSeller()

  return NextResponse.json(data, { status: 200 })
}

function dummyCreateSeller() {
  const sellers = [
    {
      name: "jammy",
      email: "jammy@gmail.com",
      password: "12345",
    },
    {
      name: "john doe",
      email: "john@gmail.com",
      password: "12345",
    },
    {
      name: "jane doe",
      email: "jane@gmail.com",
      password: "12345",
    },
    {
      name: "jack smith",
      email: "jack@gmail.com",
      password: "12345",
    },
  ]

  for (const sellerDetail of sellers) {
    sellerService.createSeller(sellerDetail)
  }
}

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()

//     return NextResponse.json({ success: true, received: body }, { status: 201 })
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
//   }
// }
