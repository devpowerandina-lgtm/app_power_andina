# ⚡ Master Blueprint: Power Andina
Este documento es la **Fuente de Verdad Absoluta** del proyecto Power Andina. Está diseñado para que cualquier IA o desarrollador entienda instantáneamente la arquitectura, el flujo de datos y la organización del código.

---

## 🏗️ 1. Arquitectura del Sistema
El proyecto está dividido en un monorepositorio con dos componentes principales:
1.  **Mobile**: Aplicación React Native con Expo (SDK 54).
2.  **Backend**: API Express con TypeScript.

### Patrón de Diseño: Arquitectura Modular basada en Dominios
Tanto en el frontend como en el backend, el código se organiza por **módulos**. Cada módulo encapsula su propia lógica, componentes y servicios.
-   `src/modules/[module_name]`: Lógica específica del dominio.
-   `src/shared`: Código transversal (utilidades, infraestructura, hooks globales).

---

## 📱 2. Estructura del Proyecto Mobile (`/mobile`)

### 📂 Árbol de Directorios Principal
```text
mobile/
├── App.tsx                 # Navegación y Root Provider
├── src/
│   ├── modules/            # Módulos Funcionales
│   │   ├── auth/           # Login, Registro, Recuperación
│   │   ├── cart/           # Carrito de compras y Checkout
│   │   ├── catalog/        # Catálogo, Detalle de Producto, Categorías
│   │   └── notifications/  # Centro de notificaciones
│   ├── shared/             # Recursos Compartidos
│   │   ├── components/     # UI Kit base (Botones, Inputs, etc.)
│   │   ├── hooks/          # useNetworkStatus, useDebounce, etc.
│   │   ├── infrastructure/ # Clientes (SupabaseClient.ts)
│   │   └── utils/          # Formateadores, validadores
│   └── styles/             # global.css (NativeWind/Tailwind)
└── scripts/                # Parches para Metro/Windows
```

### 🛠️ Stack Tecnológico
-   **Framework**: Expo + React Native.
-   **Estilos**: **NativeWind v4** (Tailwind CSS para Mobile).
-   **Estado Global**: **Zustand** (Localizado en `store/` dentro de cada módulo).
-   **Base de Datos/Auth**: **Supabase**.
-   **Iconos**: **Lucide React Native**.
-   **Animaciones**: **React Native Reanimated**.

### 🔄 Flujo de Navegación
La navegación es manual (Stack-based) gestionada en `App.tsx` mediante un `navigationStack`:
-   `navigateTo(screen)`: Agrega una pantalla al stack.
-   `goBack()`: Elimina la pantalla actual (soporta botón físico Android).
-   **Pantallas Principales**: `login`, `register`, `home`, `details`, `cart`, `category`, `notifications`.

---

## ⚙️ 3. Estructura del Proyecto Backend (`/backend`)

### 📂 Árbol de Directorios Principal
```text
backend/
├── src/
│   ├── index.ts            # Punto de entrada (Express Server)
│   ├── modules/            # Controladores y Rutas por dominio
│   ├── shared/             # Middlewares y utilidades
│   └── config/             # Variables de entorno y Supabase config
└── package.json            # Scripts de compilación y dependencias
```

### 🛠️ Stack Tecnológico
-   **Runtime**: Node.js + TypeScript.
-   **Framework**: Express.js.
-   **Validación**: **Zod** (Esquemas de datos).
-   **Seguridad**: Helmet, CORS.
-   **Loggeo**: Morgan.

---

## 💎 4. Estándares de Código y UI
1.  **Estilos**: Siempre usar clases de **Tailwind** via `className`. Evitar `StyleSheet.create`.
2.  **Componentes**: Funcionales con TypeScript. Tipado estricto de Props.
3.  **Servicios**: Las llamadas a Supabase deben estar en archivos `.service.ts` dentro de cada módulo. No hacer fetch directo en los componentes.
4.  **Imágenes**: Usar el componente `Image` de `react-native` con placeholders o esqueletos de carga.

---

## 🚀 5. Comandos Críticos
-   `npm start`: Inicia Expo (Mobile).
-   `npm run dev`: Inicia servidor de desarrollo (Backend).
-   `npm run postinstall`: Aplica parches necesarios para que Metro funcione en Windows con Node 24.

---

## 🧠 6. Contexto de Datos (Supabase)
-   **Tablas Principales**:
    -   `products`: ID, nombre, descripción, precio, stock, categoria_id.
    -   `categories`: ID, nombre, imagen.
    -   `profiles`: Datos extendidos del usuario.
    -   `orders`: Historial de compras.

---
> [!TIP]
> Este documento debe actualizarse cada vez que se agregue un nuevo módulo o se cambie una tecnología core.
