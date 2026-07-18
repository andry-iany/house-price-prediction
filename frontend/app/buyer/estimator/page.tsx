"use client"

import ActionButton from "@/components/ActionButton"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function Page() {
  const inputs = [
    { price: "number", label: "price" },
    { bedrooms: "number", label: "bedrooms" },
    { area: "number", label: "area" },
    { bathrooms: "number", label: "bathrooms" },
    { stories: "boolean", label: "stories" },
    { mainroad: "boolean", label: "mainroad" },
    { guestroom: "boolean", label: "guestroom" },
    { basement: "boolean", label: "basement" },
    { hotwaterheating: "boolean", label: "hotwaterheating" },
    { airconditioning: "boolean", label: "airconditioning" },
    { parking: "number", label: "parking" },
    {
      furnishingstatus: "option",
      options: ["furnished", "semi-furnished", "not furnished"],
    }, // TODO: double check this value
  ]

  return (
    <form className="m-auto max-w-lg p-6">
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
              // onClick={onResetFilter}
            >
              Reset Filter
            </ActionButton>
          </div>
        </Field>
      </FieldGroup>
    </form>
  )
}
