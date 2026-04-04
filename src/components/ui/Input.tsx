import { forwardRef } from "react"
import { type FieldError } from "react-hook-form"
import ErrorMessage from "./ErrorMessage"

interface InputPropsTypes extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  error?: FieldError;
  smallFont?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputPropsTypes>(
  ({ labelText, id, error, smallFont, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        <label
          htmlFor={id}
          className={`${smallFont ? 'text-sm font-medium' : 'font-medium'}`}
        >
          {labelText}
        </label>

        <input
          id={id}
          ref={ref}
          {...props}
        />

        {error && <ErrorMessage error={error} />}
      </div>
    )
  })

Input.displayName = "Input"
export default Input