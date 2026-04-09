import { FormProvider, useForm } from "react-hook-form"
import { RECEIPT_DEFAULT_VALUES, ReceiptSchema, type ReceiptData } from "../../lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import ReceiptForm from "./ReceiptForm"
import ReceiptPreview from "./ReceiptPreview"
import ReceiptActionsModal from "./ReceiptActionsModal"
import { useGenerateReceipt } from "../../hooks/useGenerateReceipt"
import LightReceipt from "./LightReceipt"

function Receipt() {
  const methods = useForm<ReceiptData>({
    resolver: zodResolver(ReceiptSchema),
    defaultValues: RECEIPT_DEFAULT_VALUES
  })

  const { isModalReceiptOpen, isLoading, receiptImage, previewRef, handleGenerate, onClose } = useGenerateReceipt()

  return (
    <FormProvider {...methods}>
      <ReceiptForm
        onGenerate={handleGenerate}
      />
      <ReceiptPreview />

      <div className="absolute -top-250">
        <LightReceipt
          ref={previewRef}
        />
      </div>

      <ReceiptActionsModal
        isOpen={isModalReceiptOpen}
        isLoading={isLoading}
        onClose={onClose}
        image={receiptImage}
      />
    </FormProvider>
  )
}

export default Receipt