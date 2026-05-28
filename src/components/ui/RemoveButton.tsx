import { RemoveIcon } from "./Icons"

interface RemoveButtonPropsTypes {
  isIndependantSubjectOrService: boolean | undefined;
  isIndependantModality: boolean | undefined;
  disabledExpression: boolean;
  handleClick: () => void;
}

function RemoveButton({
  disabledExpression,
  handleClick,
  isIndependantSubjectOrService,
  isIndependantModality,
}: RemoveButtonPropsTypes) {
  return (
    <button
      type="button"
      disabled={disabledExpression}
      onClick={handleClick}
      className={`cursor-pointer mx-auto py-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-end gap-1.5 ${(isIndependantSubjectOrService && isIndependantModality)
        ? 'col-span-1'
        : isIndependantSubjectOrService || isIndependantModality
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