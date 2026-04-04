import { AddIcon } from "./Icons"

interface AddItemButtomPropsTypes {
  handleClick: () => void;
}

function AddItemButtom({ handleClick }: AddItemButtomPropsTypes) {
  return (
    <button
      type="button"
      className="cursor-pointer w-fit mt-3 p-2 flex items-center gap-2 border-2 border-primary rounded-2xl transition-all ease-in-out duration-200 hover:border-secondary hover:bg-secondary hover:text-primary"
      onClick={handleClick}
    >
      <AddIcon />
      <span>Añadir nueva entrada</span>
    </button>
  )
}

export default AddItemButtom