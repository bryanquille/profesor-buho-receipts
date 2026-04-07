interface ReceiptServiceDetailsPropsTypes {
  subjectOrService: string;
  modality: string;
  dateOfClasses: string;
  hoursOfClasses: number;
  subtotal: number;
}

function ReceiptServiceDetails({
  subjectOrService,
  modality,
  dateOfClasses,
  hoursOfClasses,
  subtotal }: ReceiptServiceDetailsPropsTypes) {
  return (
    <div
      className="mb-1.5 flex justify-between items-center"
    >
      <div>
        <p className="flex justify-start items-center gap-2 font-semibold text-lg text-slate-950 dark:text-primary-neutral">
          <span>{subjectOrService}</span>
          <span>({modality})</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          <time dateTime={dateOfClasses}>
            {dateOfClasses.split('-').reverse().join('/')}
          </time>
          <span> - {hoursOfClasses} Horas</span>
        </p>
      </div>
      <p className="text-xl text-slate-950 dark:text-primary-neutral">
        ${(subtotal).toFixed(2)}
      </p>
    </div>
  )
}

export default ReceiptServiceDetails