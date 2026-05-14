import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HouseDetail } from "@/lib/types"
import ActionButton from "./ActionButton"

type TListingCardProp = {
  houseDetail: HouseDetail
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

export function ListingCard(props: TListingCardProp) {
  const house = props.houseDetail
  return (
    <Card className="relative w-full max-w-2xs min-w-2xs pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle className="text-lg font-bold text-primary-foreground">
          {formatter.format(house.price)}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {house.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <ActionButton variant="outline">Details</ActionButton>
      </CardFooter>
    </Card>
  )
}
