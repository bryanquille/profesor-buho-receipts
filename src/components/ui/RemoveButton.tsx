import { RemoveIcon } from "./Icons"

interface RemoveButtonPropsTypes {
  isIndependantSubjectOrService: boolean | undefined;
  disabledExpression: boolean;
  handleClick: () => void;
}

function RemoveButton({ disabledExpression, handleClick, isIndependantSubjectOrService }: RemoveButtonPropsTypes) {
  return (
    <button
      type="button"
      disabled={disabledExpression}
      onClick={handleClick}
      className={`cursor-pointer mx-auto py-2 disabled:opacity-50 disabled:cursor-not-allowed ${isIndependantSubjectOrService ? 'flex justify-center items-end gap-1.5 col-span-2' : ''}`}
    >
      <RemoveIcon />
      {isIndependantSubjectOrService &&
        <span>Eliminar</span>
      }
    </button>
  )
}

export default RemoveButton