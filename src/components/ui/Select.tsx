import { forwardRef } from "react"
import type { FieldError } from "react-hook-form";
import type { mappedModalityOptions } from "../../lib/schemas";
import ErrorMessage from "./ErrorMessage";

interface SelectPropsTypes extends React.SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  mappedModalityOptions: typeof mappedModalityOptions;
  error?: FieldError
  smallFont?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectPropsTypes>(
  ({ labelText, mappedModalityOptions, id, error, smallFont, ...props }, ref) => {
    return (
      <div className="flex flex-col justify-center items-start">
        <label
          htmlFor={id}
          className={smallFont ? "text-sm font-medium" : "font-medium"}
        >
          {labelText}
        </label>

        <select
          id={id}
          ref={ref}
          {...props}
        >
          {
            Object.entries(mappedModalityOptions).map(([key, value]) => (
              <option
                value={key}
                key={key}
                className="dark:text-primary"
              >
                {value}
              </option>
            ))
          }
        </select>

        {error && <ErrorMessage error={error} />}
      </div>
    )
  })

Select.displayName = "Select"
export default Select