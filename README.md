# 🦉 Profesor Búho - Generador de Recibos

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

**Profesor Búho Recibos** es una herramienta web diseñada como parte del proyecto Profesor Búho para generar comprobantes de pago rápidos, profesionales y estéticos para sus alumnos.

🚀 **Enlace:** [profesor-buho-receipts.vercel.app](https://profesor-buho-receipts.vercel.app/)

---

## ✨ Características

- **Formulario Dinámico:** Agrega múltiples clases o fechas en un solo recibo con cálculos automáticos de subtotal y total.
- **Vista Previa en Tiempo Real:** Visualiza cómo quedará el recibo mientras escribes mediante el uso de context providers.
- **Exportación de Imagen:** Genera el recibo como imagen PNG, garantizando siempre un fondo claro para legibilidad, dando la posibilidad de descargarlo o compartirlo.
- **Diseño Responsive:** Interfaz optimizada para dispositivos móviles y escritorio.
- **Tema Dual:** Soporte nativo para modo claro y modo oscuro.
- **Validación Estricta:** Manejo de formularios con `React Hook Form` y validación de esquemas con `Zod`.

## 🛠️ Stack Tecnológico

- **Frontend:** React 18 + Vite.
- **Estilos:** Tailwind CSS.
- **Gestión de Formularios:** React Hook Form + Zod.
- **Captura de Imagen:** `html-to-image`.
- **Despliegue:** Vercel.

## 🚀 Instalación Local

1. ### Clona el repositorio:
   ```bash
   git clone [https://github.com/bryanquille/profesor-buho-receipts.git](https://github.com/bryanquille/profesor-buho-receipts.git)

2. ### Entra al directorio:

   ```bash
   cd profesor-buho-receipts
   ```

3. ### Instala las dependencias:

   ```bash
   npm install
   ```

4. ### Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## 📋 Próximos Pasos (Roadmap)

- [ ] Persistencia de Datos: Integración con Supabase (PostgreSQL) para guardar historial de recibos.

- [ ] Autenticación: Sistema de usuarios para que cada profesor gestione sus propios clientes de forma privada.

- [ ] Búsqueda y Filtros: Filtrar recibos generados por fecha o nombre de alumno.

- [ ] PDF Export: Implementación de descarga en formato PDF.

## 📄 Descargo de Responsabilidad

Este proyecto es una herramienta de generación de recibos informativos. No tiene validez tributaria ni constituye una factura legal en jurisdicciones que requieran comprobantes fiscales autorizados por entidades gubernamentales.

Hecho con ❤️ por Bryan Quille