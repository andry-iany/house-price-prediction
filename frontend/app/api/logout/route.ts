import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  const cookiesObj = await cookies()
  cookiesObj.delete("session")

  return NextResponse.json({ success: true })
}
