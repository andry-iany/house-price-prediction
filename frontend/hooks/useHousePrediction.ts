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

    // const options = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "User-Agent": "insomnia/12.2.0",
    //   },
    //   body: '{"houseDetails":[{"area":4800,"bedrooms":3,"bathrooms":2,"stories":4,"mainroad":"yes","guestroom":"yes","basement":"no","hotwaterheating":"no","airconditioning":"yes","parking":0,"prefarea":"no","furnishingstatus":"furnished"}]}',
    // }

    // return fetch("http://localhost:8000/predict", options)
    //   .then((response) => response.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error(err))
  }

  return useMutation({
    mutationFn: runPrediction,
  })
}

export default useHousePrediction
