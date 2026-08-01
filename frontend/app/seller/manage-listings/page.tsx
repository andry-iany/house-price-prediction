"use client"

import Authenticated from "@/components/Authenticated"
import SellerBoard from "@/components/SellerBoard"

export default function Page() {
  return (
    <Authenticated
      renderChildren={(loginStatus) => (
        <SellerBoard loginStatus={loginStatus} />
      )}
    ></Authenticated>
  )
}
