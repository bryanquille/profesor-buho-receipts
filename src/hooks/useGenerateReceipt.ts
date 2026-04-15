import { domToPng } from "modern-screenshot"
import { useRef, useState } from "react"

export const useGenerateReceipt = () => {
  const [isModalReceiptOpen, setIsModalReceiptOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [receiptImage, setReceiptImage] = useState<string | null>(null)
  const previewRef = useRef<HTMLElement | null>(null)

  const handleGenerate = async () => {
    if (!previewRef.current) return
    setIsModalReceiptOpen(true)
    setIsLoading(true)

    try {
      await document.fonts.ready
      const dataUrl = await domToPng(previewRef.current, {
        scale: 2,
      });

      setReceiptImage(dataUrl)
    } catch (error) {
      console.error("Error generando el recibo en este navegador:", error)
      alert("Hubo un problema al generar la imagen. Por favor, intenta usar otro navegador si el error persiste.")
    } finally {
      setIsLoading(false)
    }
  }

  const onClose = () => {
    setIsModalReceiptOpen(false)
    setIsLoading(false)
  }

  return {
    isModalReceiptOpen,
    isLoading,
    receiptImage,
    previewRef,
    handleGenerate,
    onClose,
  }
}
