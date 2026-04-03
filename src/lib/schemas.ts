import { z } from 'zod';

const modalityOptions = ["online", "in-person", "hybrid"] as const

export type ModalityOptionsTypes = (typeof modalityOptions)[number]

export const mappedModalityOptions: {[key in ModalityOptionsTypes]: string} = {
  "online": "Virtual",
  "in-person": "Presencial",
  "hybrid": "Híbrida"
}

// Sub-schema for individual receipt items (classes or sessions)
const ReceiptItemSchema = z.object({
  dateOfClasses: z
    .string()
    .min(1, "La fecha es requerida."),

  hoursOfClasses: z
    .coerce.number({ message: "Las horas de clase son requeridas." })
    .positive("Las horas deben ser mayores a 0."),

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

  subjectOrService: z
    .string()
    .min(1, "Debes especificar la materia o servicio.")
    .min(2, "La materio o servicio es demasiado corto."),

  modality: z
    .enum(modalityOptions, { message: 'Debes escoger una modalidad.' }),

  pricePerHour: z
    .coerce.number({ message: "El precio por hora es requerido." })
    .positive("El precio debe ser mayor a 0"),

  items: z
    .array(ReceiptItemSchema)
    .min(1, "Debes agregar al menos una clase o sesión"),

  notesOrObservations: z.string().optional(),
});

// Types inferred from the schemas for use in the application
export type ReceiptData = z.input<typeof ReceiptSchema>;
export type ReceiptItem = z.infer<typeof ReceiptItemSchema>;