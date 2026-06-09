# 🦉 Profesor Búho - Receipt Generator / Generador de Recibos

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**Profesor Búho Receipts** is a web tool designed for the Profesor Búho project to generate fast, professional, and visually appealing payment receipts for students.

**Profesor Búho Recibos** es una herramienta web diseñada como parte del proyecto Profesor Búho para generar comprobantes de pago rápidos, profesionales y estéticos para sus alumnos.

🚀 **Link / Enlace:** [profesor-buho-receipts.vercel.app](https://profesor-buho-receipts.vercel.app/)

---

## ✨ Features / Características

- **Dynamic Form / Formulario Dinámico:** Add multiple classes or dates on a single receipt with automatic subtotal and total calculations.
- **Live Preview / Vista Previa en Tiempo Real:** See the receipt update while you type using context providers.
- **Image Export / Exportación de Imagen:** Generate the receipt as a PNG image with a clear background for readability, ready to download or share.
- **Responsive Design / Diseño Responsive:** Interface optimized for mobile and desktop.
- **Theme Support / Tema Dual:** Native support for light and dark mode.
- **Strict Validation / Validación Estricta:** Form handling with `React Hook Form` and schema validation using `Zod`.

## 🛠️ Tech Stack / Stack Tecnológico

- **Frontend:** React 18 + Vite.
- **Styles:** Tailwind CSS.
- **Form Management / Gestión de Formularios:** React Hook Form + Zod.
- **Image Capture / Captura de Imagen:** `html-to-image`.
- **Deployment / Despliegue:** Vercel.

## 🚀 Local Setup / Instalación Local

1. ### Clone the repository / Clona el repositorio:
   ```bash
   git clone https://github.com/bryanquille/profesor-buho-receipts.git
   ```

2. ### Enter the directory / Entra al directorio:
   ```bash
   cd profesor-buho-receipts
   ```

3. ### Install dependencies / Instala las dependencias:
   ```bash
   npm install
   ```

4. ### Start the development server / Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📋 Roadmap / Próximos Pasos

- [ ] Data persistence: Supabase (PostgreSQL) integration to save receipt history.
- [ ] Persistencia de datos: Integración con Supabase (PostgreSQL) para guardar historial de recibos.

- [ ] Authentication: User system for teachers to manage their own students privately.
- [ ] Autenticación: Sistema de usuarios para que cada profesor gestione sus propios clientes de forma privada.

- [ ] Search and filters: Filter generated receipts by date or student name.
- [ ] Búsqueda y filtros: Filtrar recibos generados por fecha o nombre de alumno.

- [ ] PDF export: Add PDF download support.
- [ ] Exportación a PDF: Implementación de descarga en formato PDF.

## 📄 Disclaimer / Descargo de Responsabilidad

This project is a receipt generation tool for informational use only. It does not have tax validity and does not constitute a legal invoice in jurisdictions that require government-authorized fiscal receipts.

Este proyecto es una herramienta de generación de recibos informativos. No tiene validez tributaria ni constituye una factura legal en jurisdicciones que requieran comprobantes fiscales autorizados por entidades gubernamentales.

Made with ❤️ by Bryan Quille / Hecho con ❤️ por Bryan Quille