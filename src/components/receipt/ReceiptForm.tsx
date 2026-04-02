import { AddIcon, RemoveIcon } from "../ui/Icons"

function ReceiptForm() {
  return (
    <form
      className="w-11/12 mx-auto p-3 flex flex-col gap-4 border-2 rounded-2xl bg-gray-300"
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
        />
      </label>

      <label htmlFor="studentName">
        Nombre de estudiante
        <input
          type="text"
          id="studentName"
          placeholder="Ej. Junior Doe"
        />
      </label>

      <label htmlFor="subjectOrService">
        Materia/Servicio
        <input
          type="text"
          id="subjectOrService"
          placeholder="Ej. Matemáticas"
        />
      </label>

      <label htmlFor="pricePerHour">
        Precio por hora
        <input
          type="number"
          id="pricePerHour"
          placeholder="Ej. $10.00"
        />
      </label>

      <div className="w-full">
        <h3 className="mb-0.5">Clases/Entregas</h3>
        <div className="w-full flex justify-between items-center gap-2">
          <input
            type="date"
            className="w-1/4"
          />
          <input
            type="number"
            placeholder="Horas"
            className="w-1/4"
          />
          <input
            type="number"
            placeholder="$ Precio"
            className="w-1/4"
          />
          <button
            type="button"
          >
            <RemoveIcon />
          </button>
        </div>
      </div>

      <button
        type="button"
        className="cursor-pointer flex items-center gap-2"
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
        ></textarea>
      </label>

      <button
        type="submit"
        className="p-3 rounded-2xl font-semibold text-lg bg-secondary"
      >
        Generar
      </button>
    </form>
  )
}

export default ReceiptForm