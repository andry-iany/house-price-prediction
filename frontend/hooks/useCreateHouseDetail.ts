import { useMutation, useQueryClient } from "@tanstack/react-query"

type TParam = Record<string, string>

const useCreateHouseDetail = () => {
  const queryClient = useQueryClient()

  const createHouseDetail = async (param: TParam) => {
    const numberFields = [
      "price",
      "area",
      "bedrooms",
      "bathrooms",
      "stories",
      "parking",
    ]

    let body: Record<string, string | number> = { ...param }
    for (const field of numberFields) {
      body = { ...body, [field]: parseInt(body[field] + "") }
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }

    await fetch("http://localhost:3000/api/seller/house", options)
      .then((response) => response.json())
      .catch((err) => console.error(err))
  }

  return useMutation({
    mutationFn: createHouseDetail,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllHouseDetails"] })
    },
  })
}

export default useCreateHouseDetail
