import { db } from "@/lib/db"
import { SellerService } from "@/lib/SellerService"
import { NextResponse } from "next/server"

const sellerService = new SellerService()

export async function GET() {
  const data = { message: "Hello world" }

  //   dummyCreateSeller()

  await dummyLogin()

  return NextResponse.json(data, { status: 200 })
}

async function dummyCreateSeller() {
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
    await sellerService.createSeller(sellerDetail)
  }
}

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

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()

//     return NextResponse.json({ success: true, received: body }, { status: 201 })
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
//   }
// }
