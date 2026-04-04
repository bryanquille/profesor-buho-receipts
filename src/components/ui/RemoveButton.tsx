import { RemoveIcon } from "./Icons"

interface RemoveButtonPropsTypes {
  disabledExpression: boolean;
  handleClick: () => void;
}

function RemoveButton({ disabledExpression, handleClick }: RemoveButtonPropsTypes) {
  return (
    <button
      type="button"
      disabled={disabledExpression}
      onClick={handleClick}
      className="cursor-pointer py-2 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <RemoveIcon />
    </button>
  )
}

export default RemoveButton