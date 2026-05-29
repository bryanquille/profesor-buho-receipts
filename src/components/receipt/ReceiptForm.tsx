import { useFormContext, useWatch, type FieldError } from "react-hook-form"
import { type ReceiptData, mappedModalityOptions, RECEIPT_DEFAULT_VALUES } from "../../lib/schemas"
import Input from "../ui/Input"
import Textarea from "../ui/Textarea"
import Select from "../ui/Select"
import GenerateButton from "../ui/GenerateButton"
import DynamicInputs from "./DynamicInputs"
import ResetButton from "../ui/ResetButton"
import { useModifyTotal } from "../../hooks/useModifyTotal"

interface ReceiptFormPropsTypes {
  onGenerate: () => void;
}

function ReceiptForm({ onGenerate }: ReceiptFormPropsTypes) {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<ReceiptData>()

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

  const { isModifyTotalToPay } = useModifyTotal()

  const onSubmit = (data: ReceiptData) => {
    console.log(data)
    onGenerate()
  }

  return (
    <form
      className="w-full p-3 flex flex-col gap-4 border-2 rounded-2xl bg-gray-300 dark:bg-primary"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <h2 className="font-bold text-lg">Detalles del cliente</h2>
        <p>Ingresa la información para generar el recibo.</p>
      </div>

      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
        <Input
          labelText="Nombre del cliente"
          type="text"
          id="customerName"
          placeholder="Ej. John Doe"
          {...register('customerName')}
          error={errors.customerName}
        />

        <Input
          labelText="Nombre del estudiante"
          type="text"
          id="studentName"
          placeholder="Ej. Junior Doe"
          {...register('studentName')}
          error={errors.studentName}
        />

        <Input
          labelText="Nombre del Profesor"
          type="text"
          id="teacherName"
          placeholder="Ej. Dr. Smith"
          {...register('teacherName')}
          error={errors.teacherName}
        />

        <Input
          labelText="Materia/Servicio"
          type="text"
          id="subjectOrService"
          placeholder="Ej. Matemáticas"
          disabled={isIndependantSubjectOrService}
          className={isIndependantSubjectOrService ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600' : ''}
          {...register('subjectOrService')}
          error={errors.subjectOrService}
        />

        <Select
          labelText="Modalidad"
          id="modality"
          disabled={isIndependantModality}
          className={isIndependantModality ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600' : ''}
          mappedModalityOptions={mappedModalityOptions}
          {...register('modality')}
          error={errors.modality}
        />

        <Input
          labelText="Precio por hora"
          type="number"
          id="pricePerHour"
          disabled={isIndependantPricePerHour}
          className={isIndependantPricePerHour ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600' : ''}
          placeholder="Ej. $10.00"
          step="0.01"
          {...register('pricePerHour', { valueAsNumber: true })}
          error={errors.pricePerHour as FieldError}
        />
      </div>

      <div className="flex flex-row-reverse justify-end items-center gap-2">
        <label
          htmlFor="independantSubjectOrService"
        >
          ¿Materia/Servicio independiente?
        </label>
        <input
          type="checkbox"
          id="independantSubjectOrService"
          className="cursor-pointer transform scale-150"
          style={{ width: '3rem', padding: 0 }}
          {...register('independantSubjectOrService')}
        />
      </div>

      <div className="flex flex-row-reverse justify-end items-center gap-2">
        <label
          htmlFor="independantModality"
        >
          ¿Modalidad independiente?
        </label>
        <input
          type="checkbox"
          id="independantModality"
          className="cursor-pointer transform scale-150"
          style={{ width: '3rem', padding: 0 }}
          {...register('independantModality')}
        />
      </div>

      <div className="flex flex-row-reverse justify-end items-center gap-2">
        <label
          htmlFor="independantPricePerHour"
        >
          ¿Precio por hora independiente?
        </label>
        <input
          type="checkbox"
          id="independantPricePerHour"
          className="cursor-pointer transform scale-150"
          style={{ width: '3rem', padding: 0 }}
          {...register('independantPricePerHour')}
        />
      </div>

      <DynamicInputs />

      <Textarea
        labelText="Notas/Observaciones"
        id="notesOrObservations"
        placeholder="Ej. Revisión de ecuaciones de primer grado."
        {...register('notesOrObservations')}
        error={errors.notesOrObservations}
      />

      <div>
        <label htmlFor="modifyTotalToPay">
          Modificar Total a Pagar
        </label>
        <input
          type="checkbox"
          id="modifyTotalToPay"
          className="transform scale-150"
          style={{ width: '3rem', padding: 0 }}
          {...register('modifyTotalToPay')}
        />
      </div>

      <Input
        labelText="Total a Pagar"
        type="number"
        id="totalToPay"
        placeholder="Ej. $50.00"
        step="0.01"
        disabled={!isModifyTotalToPay}
        className={!isModifyTotalToPay ? 'bg-gray-400 cursor-not-allowed dark:bg-gray-600' : ''}
        {...register('totalToPay', { valueAsNumber: true })}
        error={errors.totalToPay as FieldError}
      />

      <div className="flex justify-between items-center gap-4">
        <GenerateButton />
        <ResetButton
          handleClick={() => reset(RECEIPT_DEFAULT_VALUES)}
        />
      </div>
    </form>
  )
}

export default ReceiptForm