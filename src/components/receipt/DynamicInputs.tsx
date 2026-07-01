import { mappedModalityOptions, type ReceiptData } from "../../lib/schemas"
import { useFieldArray, useFormContext, type FieldError, useWatch } from "react-hook-form"
import Input from "../ui/Input"
import RemoveButton from "../ui/RemoveButton"
import ErrorMessage from "../ui/ErrorMessage"
import AddItemButtom from "../ui/AddItemButtom"
import { useEffect } from "react"
import { convertTimeToHours } from "../../lib/utils"
import Select from "../ui/Select";

function DynamicInputs() {
  const { register, control, formState: { errors }, setValue } = useFormContext<ReceiptData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  })

  const isIndependantSubjectOrService = useWatch({
    control,
    name: "independantSubjectOrService"
  })

  const isIndependantModality = useWatch({
    control,
    name: "independantModality"
  })

  const isIndependantPricePerHour = useWatch({
    control,
    name: "independantPricePerHour"
  })

  const globalPricePerHour = useWatch({
    control,
    name: "pricePerHour"
  })

  const items = useWatch({
    control,
    name: "items"
  })

  useEffect(() => {
    items?.forEach((item, index) => {
      const hours = convertTimeToHours(item.hoursOfClasses)
      const price = isIndependantPricePerHour
        ? Number(item.independantPricePerHour)
        : Number(globalPricePerHour)

      if (hours > 0 && price > 0) {
        const calculatedSubtotal = hours * price
        if (item.subtotal !== calculatedSubtotal) {
          setValue(`items.${index}.subtotal`, calculatedSubtotal.toFixed(2))
        }
      }
    })
  }, [items, isIndependantPricePerHour, globalPricePerHour, setValue])

  return (
    <div className="w-full">
      <h3 className="mb-0.5 font-medium">Clases/Entregas</h3>
      {
        fields.map((field, index) => (
          <div key={field.id}>
            <div
              className='grid grid-cols-2 gap-y-2 gap-x-3'
            >
              {isIndependantSubjectOrService &&
                <Input
                  labelText="Materia/Servicio"
                  smallFont={true}
                  type="text"
                  id={`independantSubjectOrService-${index}`}
                  placeholder="Ej. Matemáticas"
                  {...register(`items.${index}.independantSubjectOrService` as const)}
                />
              }

              {isIndependantModality &&
                <Select
                  labelText="Modalidad"
                  smallFont={true}
                  id={`independantModality-${index}`}
                  mappedModalityOptions={mappedModalityOptions}
                  {...register(`items.${index}.independantModality` as const)}
                />
              }

              {isIndependantPricePerHour &&
                <Input
                  labelText="Precio por hora"
                  smallFont={true}
                  type="number"
                  id={`independantPricePerHour-${index}`}
                  placeholder="Ej. $10.00"
                  step="0.01"
                  {...register(`items.${index}.independantPricePerHour` as const, { valueAsNumber: true })}
                />
              }

              <Input
                labelText="Fecha"
                smallFont={true}
                type="date"
                id={`dateOfClasses-${index}`}
                {...register(`items.${index}.dateOfClasses` as const)}
              />

              <Input
                labelText="Tiempo"
                smallFont={true}
                type="text"
                id={`hoursOfClasses-${index}`}
                placeholder="Ej. 02:00"
                {...register(`items.${index}.hoursOfClasses` as const)}
              />

              <Input
                labelText="Subtotal"
                smallFont={true}
                type="number"
                id={`subtotal-${index}`}
                placeholder="$10.00"
                step="0.01"
                {...register(`items.${index}.subtotal` as const,
                  { valueAsNumber: true }
                )}
              />

              <RemoveButton
                disabledExpression={fields.length === 1}
                handleClick={() => remove(index)}
                isIndependantSubjectOrService={isIndependantSubjectOrService}
                isIndependantModality={isIndependantModality}
                isIndependantPricePerHour={isIndependantPricePerHour}
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
          independantModality: 'online',
          dateOfClasses: '',
          hoursOfClasses: '',
          subtotal: 0
        })}
      />
    </div>
  )
}

export default DynamicInputs