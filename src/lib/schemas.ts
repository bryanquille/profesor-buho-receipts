import { z } from 'zod';

// Sub-schema for individual receipt items (classes or sessions)
const ReceiptItemSchema = z.object({
  classOfDate: z.string().min(1, "La fecha es requerida"),
  hoursOfClasses: z.number().positive("Las horas deben ser mayores a 0"),
  subtotal: z.number()
});

// main schema for the receipt form
export const ReceiptSchema = z.object({
  customerName: z.string().min(2, "El nombre del cliente es muy corto"),
  studentName: z.string().min(2, "El nombre del estudiante es muy corto"),
  subjectOrService: z.string().min(2, "Debes especificar la materia o servicio"),
  pricePerHour: z.number().positive("El precio debe ser mayor a 0"),
  items: z.array(ReceiptItemSchema).min(1, "Debes agregar al menos una clase o sesión"),
  notesOrObservations: z.string().optional(),
});

// Types inferred from the schemas for use in the application
export type ReceiptData = z.infer<typeof ReceiptSchema>;
export type ReceiptItem = z.infer<typeof ReceiptItemSchema>;