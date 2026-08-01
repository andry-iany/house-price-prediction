import { HouseDetail } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import { LoginStatus } from "./auth"

type UseGetHouseDetailsProps = {
  viewerMode?: "seller" | "buyer"
  loginStatus?: LoginStatus
}

const useGetHouseDetails = (props: UseGetHouseDetailsProps = {}) => {
  const { viewerMode = "buyer", loginStatus } = props

  const getHouseDetails = async () => {
    const endpoint = viewerMode === "seller" ? "seller/house" : "houses"

    const data = await fetch(`http://localhost:3000/api/${endpoint}`)
      .then((response) => response.json())
      .catch((err) => console.error(err))

    return (data?.houses || []) as HouseDetail[]
  }

  const { data, ...rest } = useQuery({
    queryKey: ["getAllHouseDetails", viewerMode, loginStatus?.email],
    queryFn: getHouseDetails,
  })

  return { ...rest, houses: (data || []) as HouseDetail[] }
}

export default useGetHouseDetails
