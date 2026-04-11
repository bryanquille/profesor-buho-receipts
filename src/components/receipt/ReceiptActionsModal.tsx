import { CloseIcon, DownloadIcon, ShareIcon } from "../ui/Icons";
import Loader from "../ui/Loader";

interface ReceiptActionsModalPropsTypes {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  image: string | null;
}

function ReceiptActionsModal({ isOpen, isLoading, onClose, image }: ReceiptActionsModalPropsTypes) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = `Recibo-${Date.now()}.png`;
    if (image) link.href = image;
    link.click();
  }

  const handleShare = async () => {
    if (!image) return;
    const blob = await (await fetch(image)).blob();
    const file = new File([blob], 'recibo.png', { type: blob.type });

    if (navigator.share && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: 'Recibo de Pago - Profesor Búho',
      });
    } else {
      alert("Tu navegador no soporta compartir archivos. Por favor, descarga la imagen.");
    }
  }

  return (
    isOpen &&
    <div className="fixed inset-0 grid place-items-center bg-mist-900/90">
      <section
        className="w-11/12 max-w-125 p-4 flex flex-col justify-center items-center gap-3 border-2 border-gray-900 rounded-xl bg-gray-200"
      >
        {isLoading &&
          <div className="grid place-items-center gap-2">
            <Loader />
            <p className="text-2xl text-slate-950">Generando Recibo...</p>
          </div>
        }
        {(image && !isLoading) &&
          <>
            <header className="relative p-3 w-full dark:text-slate-950">
              <h2 className="font-semibold text-xl text-center">Vista previa y acciones</h2>
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer absolute top-2 right-0 p-2 rounded-full hover:bg-gray-200 transition-colors duration-150 ease-in md:top-3 md:right-3"
              >
                <CloseIcon />
              </button>
            </header>
            <main>
              <img
                src={image}
                alt="Vista previa del recibo"
                className="max-h-[60vh] object-contain"
              />
            </main>
            <footer className="mt-auto mb-5 p-3 flex justify-evenly items-center gap-6 border-2 border-gray-500 rounded-xl bg-gray-300 text-slate-800 dark:bg-primary dark:text-primary-neutral">
              <button
                type="button"
                onClick={handleDownload}
                className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-xl  hover:outline-2 hover:text-slate-950 hover:inset-shadow-xs hover:inset-shadow-slate-400 dark:hover:text-secondary dark:hover:outline-secondary transition-all duration-100 ease-in"
              >
                <DownloadIcon />
                <span className="text-sm">Descargar</span>
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-xl hover:outline-2 hover:text-slate-950 hover:inset-shadow-xs hover:inset-shadow-slate-400 dark:hover:text-secondary dark:hover:outline-secondary transition-all duration-100 ease-in"
              >
                <ShareIcon />
                <span className="text-sm">Compartir</span>
              </button>
            </footer>
          </>
        }
      </section>
    </div>
  )
}

export default ReceiptActionsModal