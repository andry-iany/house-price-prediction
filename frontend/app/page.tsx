"use client"

import SidebarFilter from "@/components/SidebarFilter"
import { ListingCard } from "@/components/ListingCard"
import { useState } from "react"
import { Filter } from "@/lib/types"
import useGetHouseDetails from "@/hooks/useGetHouseDetails"

export default function Page() {
  const [filter, setFilter] = useState<Filter>({})

  const houses = useGetHouseDetails()
  const filteredHouses = houses.filter((house) => {
    return (
      house.price >= (filter.minPrice || -Infinity) &&
      house.price <= (filter.maxPrice || Infinity)
    )
  })

  return (
    <section className="flex py-8">
      <section className="max-w-3xs min-w-3xs px-3">
        <section>
          <SidebarFilter filter={filter} setFilter={setFilter} />
        </section>
      </section>
      <section className="w-full px-3">
        <h2 className="mb-6 text-xl font-bold text-primary-foreground">
          Properties for Sale
        </h2>
        <section className="flex flex-wrap items-center justify-between gap-x-3 gap-y-6">
          {filteredHouses.map((house, i) => (
            <ListingCard houseDetail={house} key={i} />
          ))}
        </section>
      </section>
    </section>
  )
}
