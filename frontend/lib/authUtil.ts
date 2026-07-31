import { cookies } from "next/headers"

export async function getCurrentlyLoggedInUser() {
  const session = await cookies().then((obj) => obj.get("session"))
  return session?.value
}
