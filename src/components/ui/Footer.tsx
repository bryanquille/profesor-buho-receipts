import { DownloadIcon, ShareIcon } from "./Icons"

function Footer() {
  return (
    <footer className="mt-auto mb-5 p-3 flex justify-evenly items-center gap-6 rounded-2xl bg-primary text-primary-neutral dark:shadow-xs dark:shadow-primary-neutral">
      <button
        type="button"
        className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-2xl hover:text-secondary hover:outline-2 hover:outline-secondary transition-all duration-150 ease-in"
      >
        <DownloadIcon />
        <span className="text-sm">Descargar</span>
      </button>
      <button
        type="button"
        className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-2xl hover:text-secondary hover:outline-2 hover:outline-secondary transition-all duration-150 ease-in"
      >
        <ShareIcon />
        <span className="text-sm">Compartir</span>
      </button>
    </footer>
  )
}

export default Footer