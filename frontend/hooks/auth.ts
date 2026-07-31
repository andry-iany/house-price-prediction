import { useQuery } from "@tanstack/react-query"

type LoginStatus = {
  isAuthenticated: boolean
  email?: string
}

export const useCheckLoginStatus = () => {
  const checkLoginStatus = async () => {
    const data = await fetch("http://localhost:3000/api/login")
      .then((response) => response.json())
      .catch((err) => console.error(err))

    return data as LoginStatus
  }

  const { data, ...rest } = useQuery({
    queryKey: ["checkLoginStatus"],
    queryFn: checkLoginStatus,
    enabled: false,
  })

  return { ...rest, loginStatus: data }
}
