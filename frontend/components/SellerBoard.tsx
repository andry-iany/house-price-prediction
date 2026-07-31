"use client"

import ActionButton from "@/components/ActionButton"
import EditHouseDialog from "@/components/EditHouseDialog"
import { ListingCard } from "@/components/ListingCard"
import SidebarFilter from "@/components/SidebarFilter"

import useGetHouseDetails from "@/hooks/useGetHouseDetails"
import { Filter } from "@/lib/types"
import { useState } from "react"

export default function SellerBoard() {
  const [isOpen, setIsOpen] = useState(false)
  const [filter, setFilter] = useState<Filter>({})
  const { houses } = useGetHouseDetails({ sellerId: 5 }) // TODO: fix this
  const filteredHouses = houses.filter((house) => {
    return (
      house.price >= (filter.minPrice || -Infinity) &&
      house.price <= (filter.maxPrice || Infinity)
    )
  })

  return (
    <>
      <section className="flex py-8">
        <section className="max-w-3xs min-w-3xs px-3">
          <section>
            <SidebarFilter filter={filter} setFilter={setFilter} />
          </section>
        </section>
        <section className="w-full px-3">
          <h2 className="mb-2 text-xl font-bold text-primary-foreground">
            Manage my listings
          </h2>
          <div className="mb-6">
            <ActionButton variant="primary" onClick={() => setIsOpen(true)}>
              Add new house
            </ActionButton>
          </div>
          <section className="flex flex-wrap items-center gap-8">
            {!filteredHouses.length && (
              <h3>No data to show. Adjust your filter</h3>
            )}
            {filteredHouses.map((house, i) => (
              <ListingCard houseDetail={house} key={house.id} />
            ))}
          </section>
        </section>
        <div>
          {isOpen && (
            <EditHouseDialog isOpen={isOpen} onOpenChange={setIsOpen} />
          )}
        </div>
      </section>
    </>
  )
}
