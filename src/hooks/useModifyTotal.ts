import { useFormContext, useWatch } from "react-hook-form"
import type { ReceiptData } from "../lib/schemas"
import { useEffect } from "react"

export const useModifyTotal = () => {
  const {
    control,
    setValue,
  } = useFormContext<ReceiptData>()

  const isModifyTotalToPay = useWatch({
    control,
    name: "modifyTotalToPay"
  })

  const items = useWatch({
    control,
    name: "items"
  })

  useEffect(() => {
    if (isModifyTotalToPay) return
    const totalFromItems = items?.reduce((acc, item) => acc + (item.subtotal as number || 0), 0) || 0
    setValue('totalToPay', totalFromItems)
  }, [isModifyTotalToPay, items, setValue])

  return {
    isModifyTotalToPay,
  }
}
