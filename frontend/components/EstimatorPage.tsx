"use client"

import ActionButton from "@/components/ActionButton"
import { SelectInput, TextInput, TInput } from "@/components/Inputs"
import { Field, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"
import useHousePrediction from "@/hooks/useHousePrediction"
import { MouseEventHandler, SubmitEventHandler, useRef, useState } from "react"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export default function EstimatorPage() {
  const { formRef, data, isPending, onClearForm, onSubmit } = useEstimatorPage()

  return (
    <div className="mx-auto flex max-w-3xl">
      <form ref={formRef} onSubmit={onSubmit} className="w-full p-6">
        <FieldGroup>
          <FieldSet>
            <FieldLegend>
              <h2 className="mb-0 text-xl font-bold text-primary-foreground">
                House Price Estimator
              </h2>
            </FieldLegend>
            <FieldGroup className="grid grid-cols-2">
              {renderInputs()}
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <div>
              <ActionButton
                disabled={isPending}
                name="submitBtn"
                variant="primary"
              >
                Estimate Price
              </ActionButton>
            </div>
            <div>
              <ActionButton
                disabled={isPending}
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
      <div className="min-w-3xs p-6">
        <h1 className="mb-3 text-2xl">Estimated Price:</h1>
        {data ? (
          <div className="text-lg">{formatter.format(data)}</div>
        ) : (
          <small>Fill the form to the see the results here</small>
        )}
      </div>
    </div>
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
