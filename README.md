# 📂 Project Blueprint: Subscrip-Track SaaS (Next.js Edition)

## 1. Visión General del Proyecto
* **Nombre:** Subscrip-Track
* **Objetivo:** Desarrollar una aplicación SaaS para la gestión de finanzas personales enfocada en suscripciones recurrentes (Netflix, Spotify, AWS, etc.).
* **Propuesta de Valor:** Visualización de gastos mensuales, conversión de monedas automática y alertas de renovación.
* **Flujo de Usuario:** Landing Page (Marketing) -> Auth (Login/Register) -> Dashboard (App Privada).

---

## 2. Tech Stack Definido

### Backend (API REST)
* **Framework:** FastAPI (Python 3.10+).
* **Base de Datos:** PostgreSQL.
* **ORM:** SQLModel o SQLAlchemy (Modo Async).
* **Validación:** Pydantic V2.
* **Autenticación:** OAuth2 con Password Flow + JWT.
* **Task Runner:** BackgroundTasks de FastAPI (para envío de emails).

### Frontend (SPA/SSR Moderno)
* **Framework Principal:** Next.js (App Router).
* **Lenguaje:** TypeScript.
* **Estilos:** TailwindCSS (posible integración con Shadcn/UI para las Cards/Tablas).
* **Gestión de Estado (Cliente):** Zustand o React Context.
* **Fetching de Datos:** Fetch API (en Server Components) y TanStack Query (en Client Components).
* **Gráficos:** Recharts o Chart.js.

---

## 3. Arquitectura del Sistema
El proyecto sigue una arquitectura de **"Backend Desacoplado con Frontend Next.js"**:

### Capa de Datos (FastAPI)
* Expone endpoints RESTful (`/api/v1/...`).
* Maneja toda la lógica de negocio y persistencia.
* **Seguridad:** Emite tokens JWT.

### Capa de Presentación (Next.js App Router)
* **Server Components (RSC):** Se encargan de hacer el fetch inicial de datos al backend de forma segura en el servidor (ideal para SEO en la Landing y carga inicial del Dashboard).
* **Client Components:** Manejan la interactividad (formularios, filtros de tabla, tooltips de gráficos).
* **Middleware:** Next.js Middleware para proteger las rutas `/dashboard/*`. Si no hay cookie de sesión, redirige a `/login`.

---

## 4. Diseño de Base de Datos (Esquema Conceptual)
El agente debe generar los modelos basándose en esta estructura:

### Tabla: `users`
* `id`: UUID (Primary Key)
* `email`: String (Unique, Indexed)
* `hashed_password`: String
* `full_name`: String
* `created_at`: Datetime
* `currency_preference`: String (e.g., "USD", "EUR")

### Tabla: `subscriptions`
* `id`: UUID (Primary Key)
* `user_id`: UUID (Foreign Key -> users.id)
* `name`: String (ej. "Netflix")
* `price`: Decimal (ej. 15.99)
* `currency`: String (ej. "USD")
* `billing_cycle`: Enum ("monthly", "yearly")
* `start_date`: Date
* `next_payment_date`: Date (Calculado)
* `category`: String (Tag)
* `is_active`: Boolean

---

## 5. Estructura de Directorios (Monorepo Sugerido)

```text
/project-root
├── /backend                # Aplicación FastAPI
│   ├── /app
│   │   ├── /api            # Endpoints
│   │   ├── /core           # Config, Security
│   │   ├── /models         # SQLModel schemas
│   │   └── main.py
│   └── ...
│
├── /frontend               # Aplicación Next.js
│   ├── /app
│   │   ├── /(marketing)    # Grupo de rutas públicas
│   │   │   └── page.tsx    # Landing Page (Diseño tipo Lovable)
│   │   ├── /(auth)         # Grupo de rutas de autenticación
│   │   │   ├── /login
│   │   │   └── /register
│   │   └── /(dashboard)    # Grupo de rutas protegidas
│   │       ├── layout.tsx  # Sidebar + Header del usuario
│   │       └── /dashboard  # Vista principal de gastos
│   ├── /components
│   │   ├── /ui             # Componentes base (Botones, Inputs)
│   │   └── /features       # Componentes de negocio (SubscriptionCard, Chart)
│   ├── /lib                # Utilidades y Fetchers
│   └── next.config.mjs
│
└── docker-compose.yml      # Orquestación