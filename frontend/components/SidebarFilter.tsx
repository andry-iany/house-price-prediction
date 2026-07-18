"use client"

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { MouseEventHandler, SubmitEventHandler, useRef, useState } from "react"
import ActionButton from "./ActionButton"
import type { Filter } from "@/lib/types"

type SidebarFilterProps = {
  filter: Filter
  setFilter: (filter: Filter) => void
}

const SidebarFilter = (props: SidebarFilterProps) => {
  const { formRef, onResetFilter, onSubmit } = useSidebarFilter(props)

  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>
            <h2 className="mb-0 text-xl font-bold text-primary-foreground">
              Filters
            </h2>
          </FieldLegend>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="minPrice">Minimum Price</FieldLabel>
              <Input
                id="minPrice"
                min={0}
                type="number"
                name="minPrice"
                placeholder="Minimum Price"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="maxPrice">Maximum Price</FieldLabel>
              <Input
                id="maxPrice"
                min={0}
                type="number"
                name="maxPrice"
                placeholder="Maximum Price"
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <div className="w-100">
            <ActionButton name="searchBtn" variant="outline">
              Search
            </ActionButton>
          </div>
          <div className="w-100">
            <ActionButton
              name="resetFilter"
              type="button"
              variant="outline"
              onClick={onResetFilter}
            >
              Reset Filter
            </ActionButton>
          </div>
        </Field>
      </FieldGroup>
    </form>
  )
}

const useSidebarFilter = (props: SidebarFilterProps) => {
  const formRef = useRef<HTMLFormElement>(null)

  const { setFilter } = props

  // handle submit
  const onSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const filters: Filter = {
      minPrice: parseFloat((formData.get("minPrice") as string) || "0"),
      maxPrice: parseFloat((formData.get("maxPrice") as string) || "0"),
    }

    setFilter(filters)
  }

  // handle reset filter
  const onResetFilter: MouseEventHandler<HTMLButtonElement> = (e) => {
    formRef.current?.reset()
    setFilter({})
  }

  return {
    formRef,
    onSubmit,
    onResetFilter,
  }
}

export default SidebarFilter
