import { HouseDetail } from "@/lib/types"
import { useMutation } from "@tanstack/react-query"

type TParam = Record<string, string>
type TResponse = {
  input_received: any[]
  model_version: string
  predictions: number[]
}

const useHousePrediction = () => {
  const runPrediction = async (param: TParam) => {
    const numberFields = ["area", "bedrooms", "bathrooms", "stories", "parking"]

    let body: Record<string, string | number> = { ...param }
    for (const field of numberFields) {
      body = { ...body, [field]: parseInt(body[field] + "") }
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        houseDetails: [body],
      }),
    }

    const data = (await fetch("http://localhost:8000/predict", options)
      .then((response) => response.json())
      .catch((err) => console.error(err))) as TResponse

    return data?.predictions?.length ? data.predictions[0] : null
  }

  return useMutation({
    mutationFn: runPrediction,
  })
}

export default useHousePrediction
