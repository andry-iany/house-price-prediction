"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { HouseDetail } from "@/lib/types"
import ActionButton from "./ActionButton"
import { BedDouble, Bath, RulerDimensionLine } from "lucide-react"
import { currencyFormatter, numberFormatter } from "@/lib/utils"
import { HouseDetailDialog } from "./HouseDetailDialog"
import { useState } from "react"
import Image from "next/image"

type TListingCardProp = {
  houseDetail: HouseDetail
}

export function ListingCard(props: TListingCardProp) {
  const [isOpen, setIsOpen] = useState(false)

  const house = props.houseDetail
  const textIcons = [
    {
      text: `${house.bedrooms} beds`,
      Icon: BedDouble,
    },
    {
      text: `${house.bathrooms} baths`,
      Icon: Bath,
    },
    {
      text: `${numberFormatter.format(house.area)} sqft`,
      Icon: RulerDimensionLine,
    },
  ]

  return (
    <>
      <Card className="relative w-full max-w-2xs min-w-2xs pt-0">
        {/* README: JUST RANDOMLY PICK ANY IMAGE FROM OUR PUBLIC ASSET FOR NOW */}
        {/* {house.pictureId !== undefined ? ( */}
        <div className="bg-black/35">
          <Image
            src={`/images/${Math.floor(Math.random() * 10)}.jpg`}
            // src={`/images/${house.pictureId}.jpg`}
            alt="Picture of the author"
            width={288}
            height={162}
            className="inline-block"
            style={{
              width: 288,
              height: 162,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        {/* ) : (
          <>
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
              src="https://avatar.vercel.sh/shadcn1"
              alt="Event cover"
              className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
          </>
        )} */}
        <CardHeader className="border-b">
          <CardTitle className="text-lg font-bold text-primary-foreground">
            {currencyFormatter.format(house.price)}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-xs">
            {house.description}
            <p className="mt-3">
              <span className="font-bold">Sold by:</span> {house.sellerName}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-between gap-3">
          {textIcons.map((item) => (
            <div className="flex flex-col items-center" key={item.text}>
              <item.Icon size={18} />
              <div>
                <span className="text-xs">{item.text}</span>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <ActionButton variant="outline" onClick={() => setIsOpen(true)}>
            Details
          </ActionButton>
        </CardFooter>
      </Card>
      {isOpen && (
        <HouseDetailDialog
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          houseDetail={house}
        />
      )}
    </>
  )
}
