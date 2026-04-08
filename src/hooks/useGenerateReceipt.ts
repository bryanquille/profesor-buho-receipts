import { toPng } from "html-to-image"
import { useRef, useState } from "react"

export const useGenerateReceipt = () => {
  const [isModalReceiptOpen, setIsModalReceiptOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [receiptImage, setReceiptImage] = useState<string | null>(null)
  const previewRef = useRef<HTMLElement | null>(null)

  const handleGenerate = async () => {
    if (previewRef.current === null) return
    setIsLoading(true)

    const dataUrl = await toPng(previewRef.current, { cacheBust: true })
    setReceiptImage(dataUrl)

    setIsLoading(false)
    setIsModalReceiptOpen(true)
  }

  const onClose = () => {
    setIsModalReceiptOpen(false)
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
