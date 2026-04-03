import { useFieldArray, useForm } from "react-hook-form"
import { AddIcon, RemoveIcon } from "../ui/Icons"
import { ReceiptSchema, type ReceiptData, mappedModalityOptions } from "../../lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"

const initialValue = {
  customerName: '',
  studentName: '',
  teacherName: '',
  subjectOrService: '',
  modality: 'online' as const,
  pricePerHour: 0,
  items: [{
    dateOfClasses: '',
    hoursOfClasses: 0,
    subtotal: 0
  }],
  notesOrObservations: ''
}

function ReceiptForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    // watch,
    formState: { errors }
  } = useForm<ReceiptData>({
    resolver: zodResolver(ReceiptSchema),
    defaultValues: initialValue
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items'
  })

  const onSubmit = (data: ReceiptData) => {
    console.log(data)
    reset(initialValue)
  }


  return (
    <form
      className="w-11/12 mx-auto p-3 flex flex-col gap-4 border-2 rounded-2xl bg-gray-300 dark:bg-primary"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h2 className="font-semibold text-lg">Detalles del cliente</h2>
        <p>Ingresa la información para generar el recibo.</p>
      </div>

      <label htmlFor="customerName">
        Nombre del cliente
        <input
          type="text"
          id="customerName"
          placeholder="Ej. John Doe"
          {...register('customerName')}
        />
        {
          errors.customerName
          && <span className="text-red-500 text-xs" >
            {errors.customerName.message}
          </span>
        }
      </label>

      <label htmlFor="studentName">
        Nombre del estudiante
        <input
          type="text"
          id="studentName"
          placeholder="Ej. Junior Doe"
          {...register('studentName')}
        />
        {
          errors.studentName
          && <span className="text-red-500 text-xs" >
            {errors.studentName.message}
          </span>
        }
      </label>

      <label htmlFor="teacherName">
        Nombre del profesor
        <input
          type="text"
          id="teacherName"
          placeholder="Ej. Dr. Smith"
          {...register('teacherName')}
        />
        {
          errors.teacherName
          && <span className="text-red-500 text-xs" >
            {errors.teacherName.message}
          </span>
        }
      </label>

      <label htmlFor="subjectOrService">
        Materia/Servicio
        <input
          type="text"
          id="subjectOrService"
          placeholder="Ej. Matemáticas"
          {...register('subjectOrService')}
        />
        {
          errors.subjectOrService
          && <span className="text-red-500 text-xs" >
            {errors.subjectOrService.message}
          </span>
        }
      </label>
      
      <label
        htmlFor="modality"
        className="flex flex-col justify-center items-start"
      >
        <span>Modalidad</span>
        <select
          id="modality"
          {...register('modality')}
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
        {
          errors.modality
          && <span className="text-red-500 text-xs" >
            {errors.modality.message}
          </span>
        }
      </label>

      <label htmlFor="pricePerHour">
        Precio por hora
        <input
          type="number"
          id="pricePerHour"
          placeholder="Ej. $10.00"
          {...register('pricePerHour', { valueAsNumber: true })}
        />
        {
          errors.pricePerHour
          && <span className="text-red-500 text-xs" >
            {errors.pricePerHour.message}
          </span>
        }
      </label>

      <div className="w-full">
        <h3 className="mb-0.5">Clases/Entregas</h3>

        {
          fields.map((field, index) => (
            <div key={field.id}>
              <div
                className="w-full flex justify-between items-end gap-2"
              >
                <label htmlFor={`dateOfClasses-${index}`}>
                  <span className="text-sm">Fecha</span>
                  <input
                    type="date"
                    className="w-1/4"
                    id={`dateOfClasses-${index}`}
                    {...register(`items.${index}.dateOfClasses` as const)}
                  />
                </label>
                <label htmlFor={`hoursOfClasses-${index}`}>
                  <span className="text-sm">Horas</span>
                  <input
                    type="number"
                    id={`hoursOfClasses-${index}`}
                    placeholder="Horas"
                    className="w-1/4"
                    {...register(`items.${index}.hoursOfClasses` as const, { valueAsNumber: true })}
                  />
                </label>
                <label htmlFor={`subtotal-${index}`}>
                  <span className="text-sm">Subtotal</span>
                  <input
                    type="number"
                    id={`subtotal-${index}`}
                    placeholder="$ Subtotal"
                    className="w-1/4"
                    {...register(`items.${index}.subtotal` as const, { valueAsNumber: true })}
                  />
                </label>
                <button
                  type="button"
                  disabled={fields.length === 1}
                  onClick={() => remove(index)}
                  className="cursor-pointer py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <RemoveIcon />
                </button>
              </div>
              <div className="mt-1.5 mb-2 flex flex-col justify-center items-start gap-1">
                {
                  errors.items?.[index]?.dateOfClasses
                  && <span
                    className="text-red-500 text-xs"
                  >
                    {errors.items[index].dateOfClasses?.message}
                  </span>
                }
                {
                  errors.items?.[index]?.hoursOfClasses
                  && <span
                    className="text-red-500 text-xs"
                  >
                    {errors.items[index].hoursOfClasses?.message}
                  </span>
                }
                {
                  errors.items?.[index]?.subtotal
                  && <span
                    className="text-red-500 text-xs"
                  >
                    {errors.items[index].subtotal?.message}
                  </span>
                }
              </div>
            </div>
          ))
        }
      </div>

      <button
        type="button"
        className="cursor-pointer w-fit -mt-3 p-2 flex items-center gap-2 border-2 border-primary rounded-2xl transition-all ease-in-out duration-200 hover:border-secondary hover:bg-secondary"
        onClick={() => append({
          dateOfClasses: '',
          hoursOfClasses: 0,
          subtotal: 0,
        })}
      >
        <AddIcon />
        <span>Añadir nueva entrada</span>
      </button>


      <label htmlFor="notesOrObservations">
        Notas/Observaciones
        <textarea
          id="notesOrObservations"
          rows={5}
          className="resize-none"
          {...register('notesOrObservations')}
        ></textarea>
        {
          errors.notesOrObservations
          && <span className="text-red-500 text-xs" >
            {errors.notesOrObservations.message}
          </span>
        }
      </label>

      <button
        type="submit"
        className="cursor-pointer p-3 rounded-2xl font-semibold text-lg bg-secondary hover:bg-amber-400 dark:text-primary"
      >
        Generar
      </button>
    </form>
  )
}

export default ReceiptForm