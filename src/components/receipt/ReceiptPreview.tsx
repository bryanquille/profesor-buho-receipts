import { useFormContext } from "react-hook-form"
import { mappedModalityOptions, type ReceiptData } from "../../lib/schemas"
import logo from "../../assets/images/logo/pb-icon.png"

function ReceiptPreview() {
  const { watch } = useFormContext<ReceiptData>()
  const formData = watch()

  return (
    <section className="w-11/12 p-3 flex flex-col gap-4 border-2 rounded-2xl bg-gray-300 dark:bg-primary">
      <header className="flex flex-col justify-center items-center gap-0.5">
        <div className="flex flex-row-reverse justify-center items-center gap-3">
          <h2 className="font-bold text-2xl">Recibo de Pago</h2>
          <img
            src={logo}
            alt="Logotipo del Profesor Búho"
            className="w-12 h-12"
          />
        </div>

        <strong className="text-center font-black text-2xl">
          Profesor Búho
        </strong>

        <time
          dateTime="05/04/2026"
          className="text-center opacity-80"
        >
          05 de abril del 2026
        </time>
      </header>

      <hr />

      <main className="flex flex-col justify-start gap-2">
        <p>
          <span className="font-semibold">Cliente: </span>
          <span>{formData.customerName}</span>
        </p>

        {formData.studentName && (
          <p>
            <span className="font-semibold">Estudiante: </span>
            <span>{formData.studentName}</span>
          </p>
        )}

        <p>
          <span className="font-semibold">Profesor: </span>
          <span>{formData.teacherName}</span>
        </p>

        <p>
          <span className="font-semibold">Materia/Servicio: </span>
          <span>{formData.subjectOrService}</span>
        </p>

        <p>
          <span className="font-semibold">Modalidad: </span>
          <span>{mappedModalityOptions[formData.modality]} - </span>
          <span>${(formData.pricePerHour as number).toFixed(2)}/hora</span>
        </p>

        <article>
          <h3 className="font-bold text-lg">Detalle</h3>
          <div className="flex justify-between items-center">
            <span className="w-2/6">Fecha</span>
            <span>Tiempo</span>
            <span>Subtotal</span>
          </div>
          {
            formData.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center"
              >
                <span className="w-2/6">{item.dateOfClasses}</span>
                <span>{item.hoursOfClasses as number} horas</span>
                <span>${(item.subtotal as number).toFixed(2)}</span>
              </div>
            ))
          }
        </article>

        <p className="flex justify-end items-center gap-2 text-xl">
          <span className="font-semibold">Total: </span>
          <span>${formData.items.reduce((acum, item) => item.subtotal as number + acum, 0).toFixed(2)}</span>
        </p>

        <p className="flex flex-col justify-start">
          <span className="font-semibold">Notas u observaciones: </span>
          <span>{formData.notesOrObservations}</span>
        </p>
      </main>

      <footer>
        <p className="text-sm text-center">
          <span className="text-orange-600">Importante: </span>
          <span>Documento sin valor tributario.</span>
        </p>
      </footer>
    </section>
  )
}

export default ReceiptPreview