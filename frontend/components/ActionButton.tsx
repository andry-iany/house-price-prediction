import { Button } from "@/components/ui/button"

type Props = {
  variant: "primary" | "secondary" | "outline"
  children: React.ReactNode
  onClick?: () => void
}

const ActionButton = (props: Props) => {
  const { children, variant, onClick } = props

  switch (variant) {
    case "primary":
      return (
        <Button onClick={onClick} className="white bg-primary text-white">
          {children}
        </Button>
      )
    case "outline":
      return (
        <Button
          onClick={onClick}
          variant="outline"
          className="w-full border-primary-foreground text-primary-foreground hover:bg-primary/5"
        >
          {children}
        </Button>
      )
    case "secondary":
      return <Button onClick={onClick}>{children}</Button>
  }
}

export default ActionButton
