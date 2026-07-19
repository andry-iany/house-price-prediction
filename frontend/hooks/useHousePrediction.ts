import { HouseDetail } from "@/lib/types"
import { useMutation } from "@tanstack/react-query"

type TParam = Record<string, string>

const useHousePrediction = () => {
  const runPrediction = async (param: TParam) => {
    const numberFields = ["area", "bedrooms", "bathrooms", "stories", "parking"]

    let body: Record<string, string | number> = { ...param }

    for (const field of numberFields) {
      body = { ...body, [field]: parseInt(body[field] + "") }
    }

    console.log({ body })

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/12.2.0",
      },
      body: JSON.stringify(body),
    }

    const data = await fetch("http://localhost:8000/predict", options)
      .then((response) => response.json())
      .catch((err) => console.error(err))

    console.log({ data })

    return data
  }

  return useMutation({
    mutationFn: runPrediction,
  })
}

export default useHousePrediction
