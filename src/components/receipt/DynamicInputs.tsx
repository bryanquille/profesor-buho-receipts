import type { ReceiptData } from "../../lib/schemas"
import { useFieldArray, useFormContext, type FieldError } from "react-hook-form"
import Input from "../ui/Input"
import RemoveButton from "../ui/RemoveButton"
import ErrorMessage from "../ui/ErrorMessage"
import AddItemButtom from "../ui/AddItemButtom"

function DynamicInputs() {
  const { register, control, formState: { errors } } = useFormContext<ReceiptData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  })

  return (
    <div className="w-full">
      <h3 className="mb-0.5 font-medium">Clases/Entregas</h3>
      {
        fields.map((field, index) => (
          <div key={field.id}>
            <div
              className="w-full flex justify-between items-end gap-2"
            >
              <Input
                labelText="Fecha"
                smallFont={true}
                type="date"
                id={`dateOfClasses-${index}`}
                className="w-1/4"
                {...register(`items.${index}.dateOfClasses` as const)}
              />

              <Input
                labelText="Horas"
                smallFont={true}
                type="number"
                id={`hoursOfClasses-${index}`}
                placeholder="Ej. 2"
                className="w-1/4"
                {...register(`items.${index}.hoursOfClasses` as const)}
              />

              <Input
                labelText="Subtotal"
                smallFont={true}
                type="number"
                id={`subtotal-${index}`}
                placeholder="$10.00"
                className="w-1/4"
                {...register(`items.${index}.subtotal` as const,
                  { valueAsNumber: true }
                )}
              />

              <RemoveButton
                disabledExpression={fields.length === 1}
                handleClick={() => remove(index)}
              />
            </div>
            <div className="mt-1.5 mb-2 flex flex-col justify-center items-start gap-1">
              {errors.items?.[index]?.dateOfClasses && (
                <ErrorMessage
                  error={errors.items[index].dateOfClasses}
                />
              )}
              {errors.items?.[index]?.hoursOfClasses && (
                <ErrorMessage
                  error={errors.items[index].hoursOfClasses as FieldError}
                />
              )}
              {errors.items?.[index]?.subtotal && (
                <ErrorMessage
                  error={errors.items[index].subtotal as FieldError}
                />
              )}
            </div>
          </div>
        ))
      }
      <AddItemButtom
        handleClick={() => append({
          dateOfClasses: '',
          hoursOfClasses: 0,
          subtotal: 0
        })}
      />
    </div>
  )
}

export default DynamicInputs