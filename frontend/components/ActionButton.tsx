import { Button } from "@/components/ui/button"
import { MouseEventHandler } from "react"

type Props = {
  variant: "primary" | "secondary" | "outline"
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit"
  name?: string
}

const ActionButton = (props: Props) => {
  const { children, name, variant, type, onClick } = props
  const baseProps = { name, type, onClick }

  switch (variant) {
    case "primary":
      return (
        <Button {...baseProps} className="white bg-primary text-white">
          {children}
        </Button>
      )
    case "outline":
      return (
        <Button
          {...baseProps}
          variant="outline"
          className="w-full border-primary-foreground text-primary-foreground hover:bg-primary/5"
        >
          {children}
        </Button>
      )
    case "secondary":
      return <Button {...baseProps}>{children}</Button>
  }
}

export default ActionButton
