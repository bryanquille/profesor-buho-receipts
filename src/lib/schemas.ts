import { z } from 'zod';

// Define the available modality options as a tuple and create a type from it
const modalityOptions = ["online", "in-person", "hybrid"] as const
export type ModalityOptionsTypes = (typeof modalityOptions)[number]
export const mappedModalityOptions: { [key in ModalityOptionsTypes]: string } = {
  "online": "Virtual",
  "in-person": "Presencial",
  "hybrid": "Híbrida"
}

// Default values for the receipt form, matching the structure of ReceiptData
export const RECEIPT_DEFAULT_VALUES: ReceiptData = {
  customerName: '',
  studentName: '',
  teacherName: '',
  subjectOrService: '',
  modality: 'online' as const,
  pricePerHour: 0,
  items: [{
    dateOfClasses: '',
    hoursOfClasses: '',
    subtotal: 0
  }],
  notesOrObservations: '',
  modifyTotalToPay: false,
  totalToPay: 0
}

// Sub-schema for individual receipt items (classes or sessions)
const ReceiptItemSchema = z.object({
  independantSubjectOrService: z
    .string()
    .optional(),

  dateOfClasses: z
    .string()
    .min(1, "La fecha es requerida."),

  hoursOfClasses: z
    .string()
    .min(1, "La duración en Horas:minutos es requerida.")
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "El formato de horas debe ser HH:mm."),

  subtotal: z
    .coerce.number({ message: "El valor subtotal es requerido." })
    .positive("El valor subtotal debe ser mayor a 0."),
});

// Main schema for the receipt form
export const ReceiptSchema = z.object({
  customerName: z
    .string()
    .min(1, "El nombre del cliente es requerido.")
    .min(2, "El nombre del cliente es muy corto."),

  studentName: z.string().optional(),

  teacherName: z
    .string()
    .min(1, "El nombre del profesor es requerido.")
    .min(2, "El nombre del profesor es muy corto."),

  subjectOrService: z.string().optional(),

  modality: z
    .enum(modalityOptions, { message: 'Debes escoger una modalidad.' }),

  pricePerHour: z
    .coerce.number({ message: "El precio por hora es requerido." })
    .positive("El precio debe ser mayor a 0"),

  independantSubjectOrService: z
    .boolean()
    .optional(),

  items: z
    .array(ReceiptItemSchema)
    .min(1, "Debes agregar al menos una clase o sesión"),

  notesOrObservations: z.string().optional(),

  modifyTotalToPay: z.boolean().optional(),

  totalToPay: z
    .coerce.number({ message: "El total a pagar es requerido." })
    .positive("El total a pagar debe ser mayor a 0.")
    .optional(),
});

// Types inferred from the schemas for use in the application
export type ReceiptData = z.input<typeof ReceiptSchema>;
export type ReceiptItem = z.infer<typeof ReceiptItemSchema>;