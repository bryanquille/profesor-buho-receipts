import { forwardRef } from "react"
import type { FieldError } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface TextareaPropsTypes extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  labelText: string;
  error?: FieldError;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsTypes>(
  ({ labelText, id, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        <label
          htmlFor={id}
          className="font-medium"
        >
          {labelText}
        </label>

        <textarea
          id={id}
          ref={ref}
          {...props}
          rows={5}
          className="resize-none"
        ></textarea>

        {error && <ErrorMessage error={error} />}
      </div>
    )
  })

Textarea.displayName = "Textarea"
export default Textarea