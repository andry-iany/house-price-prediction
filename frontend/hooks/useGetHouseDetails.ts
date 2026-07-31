import { HouseDetail } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const data = [
  {
    id: 1,
    price: 1300000,
    bedrooms: 8,
    area: 9020,
    bathrooms: 6,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 1,
    sellerId: 1,
    sellerName: "House dealer 1",
  },
  {
    id: 2,
    price: 1250000,
    bedrooms: 6,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 2,
    sellerId: 2,
    sellerName: "House dealer 2",
  },
  {
    id: 3,
    price: 250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 3,
    sellerId: 3,
    sellerName: "House dealer 3",
  },
  {
    id: 4,
    price: 150000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 4,
    sellerId: 4,
    sellerName: "House dealer 4",
  },
  {
    id: 5,
    price: 3250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 5,
    sellerId: 5,
    sellerName: "House dealer 5",
  },
  {
    id: 6,
    price: 120000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 6,
    sellerId: 5,
    sellerName: "House dealer 5",
  },
  {
    id: 7,
    price: 350000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 7,
    sellerId: 7,
    sellerName: "House dealer 7",
  },
  {
    id: 8,
    price: 5250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 8,
    sellerId: 5,
    sellerName: "House dealer 5",
  },
  {
    id: 9,
    price: 1250000,
    bedrooms: 4,
    area: 7420,
    bathrooms: 2,
    stories: 2,
    mainroad: true,
    prefarea: true,
    guestroom: false,
    basement: false,
    hotwaterheating: true,
    airconditioning: true,
    parking: 2,
    furnishingstatus: "furnished",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, omnis!",
    pictureId: 9,
    sellerId: 5,
    sellerName: "House dealer 5",
  },
]

type UseGetHouseDetailsProps = {
  viewerMode?: "seller" | "buyer"
}

const useGetHouseDetails = (props: UseGetHouseDetailsProps = {}) => {
  const { viewerMode = "buyer" } = props

  const getHouseDetails = async () => {
    const endpoit = viewerMode === "seller" ? "seller/house" : "houses"

    const data = await fetch(`http://localhost:3000/api/${endpoit}`) // TODO: fix this for the seller
      .then((response) => response.json())
      .catch((err) => console.error(err))

    return (data?.houses || []) as HouseDetail[]
  }

  const { data, ...rest } = useQuery({
    queryKey: ["getAllHouseDetails", viewerMode],
    queryFn: getHouseDetails,
  })

  return { ...rest, houses: (data || []) as HouseDetail[] }
}

export default useGetHouseDetails
