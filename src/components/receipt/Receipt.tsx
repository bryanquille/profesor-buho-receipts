import { FormProvider, useForm } from "react-hook-form"
import { RECEIPT_DEFAULT_VALUES, ReceiptSchema, type ReceiptData } from "../../lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import ReceiptForm from "./ReceiptForm"
import ReceiptPreview from "./ReceiptPreview"
import { useRef, useState } from "react"
import { toPng } from "html-to-image"
import ReceiptActionsModal from "./ReceiptActionsModal"

function Receipt() {
  const methods = useForm<ReceiptData>({
    resolver: zodResolver(ReceiptSchema),
    defaultValues: RECEIPT_DEFAULT_VALUES
  })
  const [isModalReceiptOpen, setIsModalReceiptOpen] = useState(true)
  const [receiptImage, setReceiptImage] = useState<string | null>(null)
  const previewRef = useRef<HTMLElement | null>(null)

  const handleGenerate = async () => {
    if (previewRef.current === null) return

    const dataUrl = await toPng(previewRef.current, { cacheBust: true })
    setReceiptImage(dataUrl)

    setIsModalReceiptOpen(true)
  }

  const onClose = () => {
    setIsModalReceiptOpen(false)
  }

  return (
    <FormProvider {...methods}>
      <ReceiptForm
        onGenerate={handleGenerate}
      />
      <ReceiptPreview
        ref={previewRef}
      />

      <ReceiptActionsModal
        isOpen={isModalReceiptOpen}
        onClose={onClose}
        image={receiptImage}
      />
    </FormProvider>
  )
}

export default Receipt