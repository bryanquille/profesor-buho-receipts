interface ResetButtonPropsTypes {
  handleClick: () => void;
}

function ResetButton({ handleClick }: ResetButtonPropsTypes) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer w-1/2 p-3 rounded-2xl font-semibold text-lg bg-purple-400 hover:bg-purple-500 dark:text-primary"
    >
      Reset
    </button>
  )
}

export default ResetButton