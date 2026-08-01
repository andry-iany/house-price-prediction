"use client"

import useLogin, { LoginStatus, useCheckLoginStatus } from "@/hooks/auth"
import { SubmitEventHandler, useEffect, useRef } from "react"
import { Field, FieldGroup, FieldLegend, FieldSet } from "./ui/field"
import ActionButton from "./ActionButton"
import { TextInput } from "./Inputs"

type AuthenticatedProps = {
  renderChildren: (loginStatus: LoginStatus) => React.ReactNode
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
    return <>{props.renderChildren(loginStatus)}</>
  }

  return (
    <div className="my-6">
      <p className="text-center">Please log in to continue...</p>
      <LoginForm />
    </div>
  )
}

const LoginForm = () => {
  const { formRef, onSubmit, isPending } = useLoginForm()

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="mx-auto w-md p-6 text-center"
    >
      <FieldGroup>
        <FieldSet>
          <FieldLegend>
            <h2 className="mb-0 text-xl font-bold text-primary-foreground">
              Login
            </h2>
          </FieldLegend>
          <FieldGroup className="grid grid-cols-1">
            <TextInput label="Email" name="email" type="email" />
            <TextInput label="Password" name="password" type="password" />
          </FieldGroup>
        </FieldSet>
        <Field>
          <div>
            <ActionButton
              disabled={isPending}
              name="submitBtn"
              variant="primary"
            >
              Login
            </ActionButton>
          </div>
        </Field>
      </FieldGroup>
    </form>
  )
}

const useLoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { mutateAsync: login, isPending } = useLogin()

  const onSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const body = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    }
    await login(body)
  }

  return {
    formRef,
    isPending,
    onSubmit,
  }
}
