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

import { Field, FieldLabel } from "@/components/ui/field"

export type TInput = {
  name: string
  type: "text" | "number" | "select"
  label: string
  options?: string[]
}

type TextInputProps = {
  type: "text" | "number"
  label: string
  name: string
}

export const TextInput = (props: TextInputProps) => {
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

export const SelectInput = (props: SelectInputProps) => {
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
