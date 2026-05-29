import { RemoveIcon } from "./Icons"

interface RemoveButtonPropsTypes {
  isIndependantSubjectOrService: boolean | undefined;
  isIndependantModality: boolean | undefined;
  isIndependantPricePerHour: boolean | undefined;
  disabledExpression: boolean;
  handleClick: () => void;
}

function RemoveButton({
  disabledExpression,
  handleClick,
  isIndependantSubjectOrService,
  isIndependantModality,
  isIndependantPricePerHour,
}: RemoveButtonPropsTypes) {
  return (
    <button
      type="button"
      disabled={disabledExpression}
      onClick={handleClick}
      className={`cursor-pointer mx-auto py-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-end gap-1.5 ${(isIndependantSubjectOrService && isIndependantModality && isIndependantPricePerHour)
        ? 'col-span-2'
        : isIndependantSubjectOrService && isIndependantModality == false && isIndependantPricePerHour == false
          ? 'col-span-2'
          : isIndependantSubjectOrService == false && isIndependantModality && isIndependantPricePerHour == false
            ? 'col-span-2'
            : isIndependantSubjectOrService == false && isIndependantModality == false && isIndependantPricePerHour
              ? 'col-span-2'
              : ''
        }`}
    >
      <RemoveIcon />
      <span>Eliminar</span>
    </button>
  )
}

export default RemoveButton