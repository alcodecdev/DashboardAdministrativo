# Dashboard - Angular 17+

Un **panel de administración moderno y funcional** construido con **Angular 17+**, diseñado para gestionar usuarios y visualizar métricas de rendimiento en tiempo real.

Este proyecto demuestra buenas prácticas de desarrollo en Angular, incluyendo **componentes standalone, arquitectura modular, consumo de APIs y feedback visual al usuario**.

---

#Características

###Gestión de Usuarios
- Listado completo de usuarios.
- Visualización detallada de perfiles.
- Edición de información de usuario.

###Dashboard de Métricas
Visualización de indicadores clave:

- Ventas
- Nuevos usuarios
- Sesiones activas
- Métricas de rendimiento

### Navegación Inteligente
- Sistema de rutas dinámicas.
- Paso de parámetros entre vistas.
- Navegación optimizada.

### Feedback Visual
Notificaciones modernas mediante **SweetAlert2** para:

- Confirmaciones
- Alertas
- Mensajes de éxito o error

### Arquitectura Moderna
Uso de prácticas actuales de Angular:

- `inject()` para dependencias
- Componentes **Standalone**
- Posibilidad de uso de **Signals**
- Separación clara de responsabilidades

### Configuración de Entornos
Configuración dual de la aplicación:

- **Desarrollo:** API local
- **Producción:** API pública

---

# Stack Tecnológico

| Tecnología                   | Descripción |
|------------------------------|-------------|
| **Angular 17+**              | Framework principal |
| **Tailwind**                 | Estilos responsive |
| **Material Icons**           | Sistema de iconografía |
| **SweetAlert2**              | Alertas visuales |
| **MockAPI / My JSON Server** | Simulación de backend |

---

# Estructura del Proyecto
```
src/
│
├── app/
│   ├── interfaces/      # Contratos de datos (User, Stats)
│   ├── services/        # Lógica de comunicación con la API
│   │   └── AdminService
│   ├── components/      # Componentes reutilizables
│   └── pages/           # Vistas principales
│       ├── Home
│       ├── UserDetail
│       └── UserEdit
│
└── environments/        # Configuración de URLs de API
```
