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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HouseDetail } from "@/lib/types"
import { MouseEventHandler, SubmitEventHandler, useRef, useState } from "react"

type HouseDetailForm = Exclude<HouseDetail, "id" | "price" | "description">

type EstimatorPageProps = {
  setHouseDetail: (houseDetail?: HouseDetailForm) => void
}

const useEstimatorPage = (props: EstimatorPageProps) => {
  const formRef = useRef<HTMLFormElement>(null)

  const { setHouseDetail } = props

  // handle submit
  const onSubmit: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    console.log({ formData: [...formData.entries()] })
  }

  const onClearForm: MouseEventHandler<HTMLButtonElement> = (e) => {
    formRef.current?.reset()
    setHouseDetail()
  }

  return {
    formRef,
    onSubmit,
    onClearForm,
  }
}

export default function Page() {
  const [houseDetail, setHouseDetail] = useState<HouseDetailForm>()

  const { formRef, onClearForm, onSubmit } = useEstimatorPage({
    setHouseDetail,
  })

  const inputs = inputConfigs.map((item) => {
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

  return (
    <form ref={formRef} onSubmit={onSubmit} className="m-auto max-w-xl p-6">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>
            <h2 className="mb-0 text-xl font-bold text-primary-foreground">
              Filters
            </h2>
          </FieldLegend>
          <FieldGroup className="grid grid-cols-2">{inputs}</FieldGroup>
        </FieldSet>
        <Field orientation="horizontal">
          <div className="w-100">
            <ActionButton name="submitBtn" variant="outline">
              Submit
            </ActionButton>
          </div>
          <div className="w-100">
            <ActionButton
              name="resetForm"
              type="button"
              variant="outline"
              onClick={onClearForm}
            >
              Reset Form
            </ActionButton>
          </div>
        </Field>
      </FieldGroup>
    </form>
  )
}

type TextInputProps = {
  type: "text" | "number" | "checkbox"
  label: string
  name: string
  options?: string[]
}

const TextInput = (props: TextInputProps) => {
  const { label, name, type } = props

  return (
    <Field>
      <FieldLabel htmlFor={name} className="capitalize">
        {label}
      </FieldLabel>
      <Input
        id={name}
        min={type === "number" ? 0 : undefined}
        type={type}
        name={name}
        required
      />
    </Field>
  )
}

type SelectInputProps = {
  label: string
  name: string
  options: string[]
}

const SelectInput = (props: SelectInputProps) => {
  const { label, name, options = [] } = props

  return (
    <div key={name}>
      <Field className="pb-3 capitalize">{label}</Field>
      <Select required name={name}>
        <SelectTrigger className="w-full capitalize">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="capitalize">{label}</SelectLabel>
            {options.map((val) => (
              <SelectItem key={val} value={val} className="capitalize">
                {val}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

type TInput = {
  name: string
  type: "text" | "number" | "checkbox" | "select"
  label: string
  options?: string[]
}

const inputConfigs: TInput[] = [
  { name: "price", type: "number", label: "price" },
  { name: "bedrooms", type: "number", label: "bedrooms" },
  { name: "area", type: "number", label: "area" },
  { name: "bathrooms", type: "number", label: "bathrooms" },
  {
    name: "stories",
    type: "select",
    options: ["yes", "no"],
    label: "stories",
  },
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
  { name: "parking", type: "number", label: "parking" },
  {
    name: "furnishingstatus",
    type: "select",
    options: ["furnished", "semi-furnished", "unfurnished"],
    label: "furnishing status",
  },
]
