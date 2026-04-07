import { CloseIcon, DownloadIcon, ShareIcon } from "../ui/Icons";

interface ReceiptActionsModalPropsTypes {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
}

function ReceiptActionsModal({ isOpen, onClose, image }: ReceiptActionsModalPropsTypes) {
  if (!isOpen || !image) return null

  const handleDownload = () => {
    const link = document.createElement('a');
    link.download = `Recibo-${Date.now()}.png`;
    link.href = image;
    link.click();
  }

  const handleShare = async () => {
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
    <div className="fixed inset-0 grid place-items-center bg-mist-900/90">
      <section className="w-11/12 max-w-125 p-4 flex flex-col justify-center items-center gap-3 border-2 border-gray-900 rounded-xl bg-gray-100">
        <header className="w-full flex justify-between items-center">
          <h2>Vista previa y acciones</h2>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer"
          >
            <CloseIcon />
          </button>
        </header>
        <main>
          {image && (
            <img
              src={image}
              alt="Vista previa del recibo"
              className="max-h-[60vh] object-contain"
            />
          )}
        </main>
        <footer className="mt-auto mb-5 p-3 flex justify-evenly items-center gap-6 rounded-2xl bg-primary text-primary-neutral dark:shadow-xs dark:shadow-primary-neutral">
          <button
            type="button"
            onClick={handleDownload}
            className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-2xl hover:text-secondary hover:outline-2 hover:outline-secondary transition-all duration-150 ease-in"
          >
            <DownloadIcon />
            <span className="text-sm">Descargar</span>
          </button>
          <button
            type="button"
            onClick={handleShare}
            className="cursor-pointer p-3 grid place-items-center gap-1.5 rounded-2xl hover:text-secondary hover:outline-2 hover:outline-secondary transition-all duration-150 ease-in"
          >
            <ShareIcon />
            <span className="text-sm">Compartir</span>
          </button>
        </footer>
      </section>
    </div>
  )
}

export default ReceiptActionsModal