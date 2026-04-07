import { useFormContext, type FieldError } from "react-hook-form"
import { type ReceiptData, mappedModalityOptions, RECEIPT_DEFAULT_VALUES } from "../../lib/schemas"
import Input from "../ui/Input"
import Textarea from "../ui/Textarea"
import Select from "../ui/Select"
import GenerateButton from "../ui/GenerateButton"
import DynamicInputs from "./DynamicInputs"
import ResetButton from "../ui/ResetButton"

interface ReceiptFormPropsTypes {
  onGenerate: () => void;
}

function ReceiptForm({ onGenerate }: ReceiptFormPropsTypes) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormContext<ReceiptData>()

  const onSubmit = (data: ReceiptData) => {
    console.log(data)
    onGenerate()
  }

  return (
    <form
      className="w-11/12 p-3 flex flex-col gap-4 border-2 rounded-2xl bg-gray-300 dark:bg-primary"
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
          {...register('subjectOrService')}
          error={errors.subjectOrService}
        />

        <Select
          labelText="Modalidad"
          id="modality"
          mappedModalityOptions={mappedModalityOptions}
          {...register('modality')}
          error={errors.modality}
        />

        <Input
          labelText="Precio por hora"
          type="number"
          id="pricePerHour"
          placeholder="Ej. $10.00"
          {...register('pricePerHour', { valueAsNumber: true })}
          error={errors.pricePerHour as FieldError}
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