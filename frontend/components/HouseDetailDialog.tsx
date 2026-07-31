import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { HouseDetail } from "@/lib/types"
import { currencyFormatter, numberFormatter } from "@/lib/utils"
import {
  AirVent,
  AlignVerticalSpaceAround,
  Bath,
  BedDouble,
  Building,
  Heater,
  HouseHeart,
  Road,
  RulerDimensionLine,
  Sofa,
  SquareParking,
} from "lucide-react"
import ActionButton from "./ActionButton"
import { ScrollArea } from "./ui/scroll-area"
import Image from "next/image"

type HouseDetailDialogProps = {
  houseDetail: HouseDetail
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

export function HouseDetailDialog(props: HouseDetailDialogProps) {
  const { houseDetail, isOpen, onOpenChange } = props

  const textIcons = [
    {
      value: `${houseDetail.bedrooms}`,
      title: "Beds",
      Icon: BedDouble,
    },
    {
      value: `${houseDetail.bathrooms}`,
      title: "Baths",
      Icon: Bath,
    },
    {
      value: `${numberFormatter.format(houseDetail.area)}`,
      title: "Square ft",
      Icon: RulerDimensionLine,
    },
    {
      title: "Stories",
      Icon: Building,
      value: `${houseDetail.bathrooms}`,
    },
    {
      title: "Main road",
      Icon: Road,
      value: `${houseDetail.mainroad ? "Yes" : "No"}`,
    },
    {
      title: "Guest room",
      Icon: HouseHeart,
      value: `${houseDetail.guestroom ? "Yes" : "No"}`,
    },
    {
      title: "Basement",
      Icon: AlignVerticalSpaceAround,
      value: `${houseDetail.basement ? "Yes" : "No"}`,
    },
    {
      title: "Hot Water",
      Icon: Heater,
      value: `${houseDetail.hotwaterheating ? "Yes" : "No"}`,
    },

    {
      title: "Air Conditioning",
      Icon: AirVent,
      value: `${houseDetail.airconditioning ? "Yes" : "No"}`,
    },
    {
      title: "Parking",
      Icon: SquareParking,
      value: `${houseDetail.parking}`,
    },
    {
      title: "Furnishing",
      Icon: Sofa,
      value: `${houseDetail.furnishingstatus}`,
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="xl:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary-foreground">
            Detail
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh]">
          <div className="mb-5">
            {houseDetail.picture_id !== undefined ? (
              <div className="bg-black/35">
                <Image
                  src={`/images/${houseDetail.picture_id}.jpg`}
                  alt="Picture of the author"
                  width={624}
                  height={331}
                  className="inline-block"
                  style={{
                    width: 624,
                    height: 331,
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                  src="https://avatar.vercel.sh/shadcn1"
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
              </>
            )}
          </div>
          <h3 className="text-xl font-bold text-primary-foreground">
            {currencyFormatter.format(houseDetail.price)}
          </h3>
          <p className="mb-3">{houseDetail.description}</p>
          <p className="mb-6">
            <span className="font-bold">Sold by:</span>{" "}
            {houseDetail.seller_name}
          </p>
          <div className="grid grid-cols-3 gap-6 border-y py-5">
            {textIcons.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-3">
                <item.Icon size={18} />
                <div>
                  <span className="text-xs uppercase">{item.title}</span>
                  <p className="text-lg font-bold capitalize">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <ActionButton variant="primary">Contact Seller</ActionButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
