import { useCheckLoginStatus } from "@/hooks/auth"
import { useEffect } from "react"

type AuthenticatedProps = {
  children: React.ReactNode
}
export default function Authenticated(props: AuthenticatedProps) {
  const { loginStatus, isLoading, refetch } = useCheckLoginStatus()

  useEffect(() => {
    refetch()
  }, [])

  if (isLoading) {
    return <div className="my-6 text-center">Loading...</div>
  }

  if (loginStatus?.isAuthenticated) {
    return <>{props.children}</>
  }

  return <div className="my-6 text-center">Please log in</div>
}
