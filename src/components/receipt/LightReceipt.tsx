import { useFormContext } from "react-hook-form"
import { mappedModalityOptions, type ReceiptData } from "../../lib/schemas"
import logo from "../../assets/images/logo/pb-icon.png"
import { getCurrentDate } from "../../lib/utils"
import ReceiptInfo from "./ReceiptInfo"
import ReceiptServiceDetails from "./ReceiptServiceDetails"
import { forwardRef } from "react"

interface ReceiptPreviewPropsTypes {
  ref: React.Ref<HTMLElement> | undefined;
}

const LightReceipt = forwardRef<HTMLElement, ReceiptPreviewPropsTypes>(
  (_props, ref) => {
    const { watch } = useFormContext<ReceiptData>()
    const formData = watch()

    return (
      <section
        ref={ref}
        className="w-105 p-4 flex flex-col gap-4 border-2 border-slate-950 rounded-xl bg-gray-200 text-slate-950"
      >
        <header className="flex flex-row-reverse justify-between items-center gap-4">
          <div className="flex flex-col justify-center items-end">
            <h2 className="mb-2 font-bold text-xl italic">
              Recibo de Pago
            </h2>
            <p className="opacity-80 text-sm">
              Quito, EC
            </p>
            <time
              dateTime={getCurrentDate()}
              className="opacity-80 text-sm"
            >
              {getCurrentDate()}
            </time>
          </div>

          <div className="flex flex-col justify-center items-start gap-1.5">
            <img
              src={logo}
              alt="Logotipo del Profesor Búho"
              className="w-14 drop-shadow-sm drop-shadow-gray-600"
            />
            <strong className="font-bold text-xl">
              Profesor Búho
            </strong>
          </div>
        </header>

        <hr />

        <main className="flex flex-col justify-start gap-2">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <ReceiptInfo
              keyInfo="Cliente:"
              info={formData.customerName}
              textSize="lg"
              isTextLightTheme={true}
            />

            {formData.studentName && (
              <ReceiptInfo
                keyInfo="Estudiante:"
                info={formData.studentName}
                textSize="lg"
                isTextLightTheme={true}
              />
            )}

            <ReceiptInfo
              keyInfo="Profesor:"
              info={formData.teacherName}
              textSize="lg"
              isTextLightTheme={true}
            />
          </div>

          <div className="mb-2.5">
            <div className="mb-1 flex justify-between items-center">
              <p className="font-bold text-sm uppercase text-gray-500">Detalle del servicio</p>
              <p className="font-bold text-sm uppercase text-gray-500">Valor</p>
            </div>
            <hr className="mb-3" />
            {
              formData.items.map((item, index) => (
                <ReceiptServiceDetails
                  key={index}
                  subjectOrService={formData.subjectOrService}
                  modality={mappedModalityOptions[formData.modality]}
                  dateOfClasses={item.dateOfClasses}
                  hoursOfClasses={item.hoursOfClasses as number}
                  subtotal={item.subtotal as number}
                  isTextLightTheme={true}
                />
              ))
            }
          </div>

          <div className="mb-3 p-4 flex justify-center items-center gap-2 rounded-md text-2xl bg-gray-300">
            <p className="font-semibold">Total: </p>
            <p>
              ${formData.items.reduce((acum, item) => item.subtotal as number + acum, 0).toFixed(2)}
            </p>
          </div>

          {formData.notesOrObservations && (
            <ReceiptInfo
              keyInfo="Notas u observaciones:"
              info={formData.notesOrObservations}
              textSize="sm"
              isTextLightTheme={true}
            />
          )}
        </main>

        <footer>
          <p className="text-xs text-center">
            <span className="text-orange-600">Importante: </span>
            <span className="text-gray-950">Documento sin valor tributario.</span>
          </p>
        </footer>
      </section>
    )
  })

LightReceipt.displayName = "LightReceipt"
export default LightReceipt