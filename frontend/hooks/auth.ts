import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export type LoginStatus = {
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
  })

  return { ...rest, loginStatus: data as LoginStatus | undefined }
}

type TParam = {
  email: string
  password: string
}

const useLogin = () => {
  const queryClient = useQueryClient()

  const login = async (param: TParam) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }

    await fetch("http://localhost:3000/api/login", options)
      .then((response) => response.json())
      .catch((err) => console.error(err))

    queryClient.invalidateQueries({ queryKey: ["checkLoginStatus"] })
  }

  return useMutation({ mutationFn: login })
}

export const useLogout = () => {
  const queryClient = useQueryClient()

  const logout = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }

    await fetch("http://localhost:3000/api/logout", options)
      .then((response) => response.json())
      .catch((err) => console.error(err))

    queryClient.invalidateQueries({ queryKey: ["checkLoginStatus"] })
  }

  return useMutation({ mutationFn: logout })
}

export default useLogin
