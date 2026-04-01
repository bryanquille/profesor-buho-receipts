import logo from "../../assets/images/logo/pb-icon.png"
import { useDarkMode } from "../../hooks/useDarkMode"
import { useHeightElement } from "../../hooks/useHeightElement"
import { MoonIcon, SunIcon } from "./Icons"

function Header() {
  const { isDark, toggleTheme } = useDarkMode()
  const { elementHeight, element } = useHeightElement()

  const handleClick = () => {
    toggleTheme()
  }
  return (
    <header className="mt-3 p-2 w-11/12 flex justify-between items-center gap-4 rounded-2xl bg-primary text-primary-neutral dark:shadow-xs dark:shadow-primary-neutral">
      <div className="flex justify-center items-center gap-3">
        <img
          src={logo}
          alt="Logotipo de Profesor Búho"
          className="w-10 h-10"
        />
        <strong className="font-semibold text-lg">PB Recibos</strong>
      </div>
      <button
        type="button"
        onClick={handleClick}
        ref={element as React.RefObject<HTMLButtonElement>}
        className="cursor-pointer relative p-1 flex justify-evenly items-center gap-2 rounded-2xl border-2 border-primary-neutral hover:border-secondary transition-all duration-150 ease-in"
      >
        <span
          className={`absolute rounded-full bg-primary ${isDark ? '-translate-x-1/2' : 'translate-x-1/2'} transform transition-all duration-300`}
          style={{ width: elementHeight, height: elementHeight }}
        ></span>
        <SunIcon />
        <MoonIcon />
      </button>
    </header>
  )
}

export default Header