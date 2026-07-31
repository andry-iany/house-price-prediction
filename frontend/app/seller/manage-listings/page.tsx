"use client"

import ActionButton from "@/components/ActionButton"
import { SelectInput, TextInput, TInput } from "@/components/Inputs"
import { ListingCard } from "@/components/ListingCard"
import SidebarFilter from "@/components/SidebarFilter"
import { Field, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"
import useGetHouseDetails from "@/hooks/useGetHouseDetails"
import useHousePrediction from "@/hooks/useHousePrediction"
import { Filter } from "@/lib/types"
import { MouseEventHandler, SubmitEventHandler, useRef, useState } from "react"

export default function Page() {
  const [filter, setFilter] = useState<Filter>({})
  const houses = useGetHouseDetails({ sellerId: 5 }) // TODO: fix this
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
          Manage my listings
        </h2>
        <section className="flex flex-wrap items-center gap-8">
          {!filteredHouses.length && (
            <h3>No data to show. Adjust your filter</h3>
          )}
          {filteredHouses.map((house, i) => (
            <ListingCard houseDetail={house} key={house.id} />
          ))}
        </section>
      </section>
    </section>
  )
}

const useEstimatorPage = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { data, isPending, mutateAsync } = useHousePrediction()

  const onSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    let body: Record<string, string> = {}
    for (const key of formData.keys()) {
      body[key] = formData.get(key)?.toString() || ""
    }

    await mutateAsync(body)
  }

  const onClearForm: MouseEventHandler<HTMLButtonElement> = (e) => {
    formRef.current?.reset()
  }

  return {
    formRef,
    data,
    isPending,
    onSubmit,
    onClearForm,
  }
}

const renderInputs = () => {
  return inputConfigs.map((item) => {
    if (item.type === "select") {
      return (
        <SelectInput
          label={item.label}
          name={item.name}
          key={item.name}
          options={item.options || []}
        />
      )
    } else {
      return (
        <TextInput
          label={item.label}
          name={item.name}
          type={item.type}
          key={item.name}
        />
      )
    }
  })
}

const inputConfigs: TInput[] = [
  { name: "bedrooms", type: "number", label: "bedrooms" },
  { name: "area", type: "number", label: "area" },
  { name: "bathrooms", type: "number", label: "bathrooms" },
  { name: "parking", type: "number", label: "parking" },
  { name: "stories", type: "number", label: "stories" },
  {
    name: "mainroad",
    type: "select",
    options: ["yes", "no"],
    label: "main road",
  },
  {
    name: "guestroom",
    type: "select",
    options: ["yes", "no"],
    label: "guest room",
  },
  {
    name: "basement",
    type: "select",
    options: ["yes", "no"],
    label: "basement",
  },
  {
    name: "hotwaterheating",
    type: "select",
    options: ["yes", "no"],
    label: "Hot water heating",
  },
  {
    name: "airconditioning",
    type: "select",
    options: ["yes", "no"],
    label: "Air conditioning",
  },
  {
    name: "prefarea",
    type: "select",
    options: ["yes", "no"],
    label: "Prefered area",
  },
  {
    name: "furnishingstatus",
    type: "select",
    options: ["furnished", "semi-furnished", "unfurnished"],
    label: "furnishing status",
  },
]
