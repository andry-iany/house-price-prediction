import { NextResponse } from "next/server"

export async function GET() {
  const data = { message: "Hello world" }
  return NextResponse.json(data, { status: 200 })
}

// export async function POST(request: Request) {
//   try {
//     const body = await request.json()

//     return NextResponse.json({ success: true, received: body }, { status: 201 })
//   } catch (error) {
//     return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
//   }
// }
