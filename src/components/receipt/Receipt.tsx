import { FormProvider, useForm } from "react-hook-form"
import { RECEIPT_DEFAULT_VALUES, ReceiptSchema, type ReceiptData } from "../../lib/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import ReceiptForm from "./ReceiptForm"
import ReceiptPreview from "./ReceiptPreview"

function Receipt() {
  const methods = useForm<ReceiptData>({
    resolver: zodResolver(ReceiptSchema),
    defaultValues: RECEIPT_DEFAULT_VALUES
  })

  return (
    <FormProvider {...methods}>
      <ReceiptForm />
      <ReceiptPreview />
    </FormProvider>
  )
}

export default Receipt