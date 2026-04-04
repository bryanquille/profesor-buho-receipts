import type { FieldError } from "react-hook-form"

interface ErrorMessagePropsTypes {
  error: FieldError
}

function ErrorMessage({ error }: ErrorMessagePropsTypes) {
  return (
    <>
      {error && (
        <span className="mt-1 text-red-500 text-xs" >
          {error.message}
        </span>
      )}
    </>
  )
}

export default ErrorMessage