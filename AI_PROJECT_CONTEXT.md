# Power Andina Mobile - Master AI Context

Este documento sirve como guía rápida para que cualquier IA pueda entender la arquitectura, el stack tecnológico y la organización del proyecto **Power Andina Mobile**.

## 🚀 Resumen del Proyecto
**Power Andina Mobile** es la aplicación móvil oficial de Power Andina SAS, diseñada para la gestión y visualización de datos del sector energético. Está construida sobre el ecosistema **Expo** y **React Native**, priorizando un desarrollo ágil y una experiencia de usuario premium.

### 🛠 Stack Tecnológico Principal
- **Core**: Expo (SDK 54), React Native (0.81), TypeScript.
- **Estilos**: NativeWind (v4) / Tailwind CSS.
- **Iconos**: Lucide React Native.
- **Backend/Auth**: Supabase (supabase-js).
- **Persistencia**: React Native Async Storage.
- **Conectividad**: React Native Community NetInfo (para detección de modo offline).

---

## 📂 Estructura de Carpetas (src)
El proyecto sigue un patrón modular para separar responsabilidades y facilitar la escalabilidad.

```text
mobile/
├── assets/                 # Recursos estáticos (imágenes, fuentes)
├── scripts/                # Scripts de automatización (ej. parches de Metro)
├── src/
│   ├── modules/            # Módulos basados en dominios/funcionalidades
│   │   └── auth/           # Módulo de Autenticación
│   │       ├── components/ # Componentes exclusivos del módulo
│   │       ├── pages/      # Vistas/Pantallas (Login, SignUp)
│   │       └── services/   # Lógica de negocio y llamadas a API (AuthService)
│   ├── shared/             # Recursos compartidos entre módulos
│   │   ├── hooks/          # Hooks personalizados globales
│   │   └── infrastructure/ # Configuración técnica (SupabaseClient, etc.)
│   └── styles/             # Configuración global de temas y Tailwind
├── App.tsx                 # Punto de entrada de la aplicación
├── index.ts                # Registro de la aplicación
├── metro.config.cjs        # Configuración de Metro (formato CommonJS)
└── package.json            # Dependencias y scripts
```

---

## 🏛 Arquitectura y Patrones
- **Modularización**: Cada funcionalidad grande reside en `src/modules`. Esto permite que el código sea fácil de encontrar y desacoplar.
- **Infrastructure Layer**: Ubicada en `src/shared/infrastructure`, centraliza la creación de clientes para servicios externos (Supabase), permitiendo inyectarlos o cambiarlos fácilmente.
- **Shared Hooks**: Se utilizan para lógica transversal, como la verificación de conexión a internet o la gestión de temas.
- **Clean Components**: Se intenta mantener las vistas (`pages`) lo más limpias posible, delegando la lógica pesada a los `services` y los estilos a `NativeWind`.

---

## 🔗 Servicios Externos
- **Supabase**: Se utiliza para la autenticación de usuarios (Email/Password y Google) y como base de datos en tiempo real.
- **Offline Guard**: La aplicación está diseñada para detectar pérdida de conexión y manejar estados persistentes mediante hooks compartidos.

---

## 💻 Comandos de Desarrollo
Debido a que el proyecto corre en **Node 24** sobre **Windows**, se han aplicado configuraciones específicas para evitar errores de ESM:

1. **Instalación de dependencias**:
   ```bash
   npm install
   ```
   *Nota: Esto dispara un script `postinstall` que parcha `metro-config` para soportar importaciones en Windows.*

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm start
   ```

3. **Configuración de Metro**:
   Se utiliza `metro.config.cjs` (CommonJS) para asegurar compatibilidad total con las herramientas de Expo en el entorno actual.

---

## 🎯 Objetivo de este documento
Cualquier cambio, refactorización o nueva funcionalidad debe respetar la estructura modular y el uso de **NativeWind** para los estilos, asegurando que el código compartido se mantenga en `shared` y el código específico en su respectivo `module`.
