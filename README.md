🚀 Overview

Este repositorio es la interfaz de usuario (Frontend) para el Task Manager. Construido con React, se encarga de gestionar la experiencia del usuario, el manejo del estado local, y la comunicación asíncrona con el Backend de Django.

🛠️ Technical Stack


    Frontend Library: React.js (Hooks, Context)

    Routing: React Router DOM (para navegación y rutas protegidas)

    HTTP Client: Axios (para manejar las peticiones a la API)

    Styling: CSS Modules / Styled Components (A elección)


🏗️ Architecture & Key Features


    Conexión con API Externa: Uso de Axios para realizar peticiones HTTP (GET, POST, PUT, DELETE) a los endpoints del Backend de DRF.

    Gestión de Tokens JWT: Implementación de un flujo de autenticación para enviar el token JWT en el encabezado de todas las peticiones protegidas.

    Rutas Protegidas: Uso de React Router para crear un componente de guardia (ProtectedRoute) que redirige a la página de login si el usuario no tiene una sesión activa.

    Patrón de State Management: Manejo del estado local y de las tareas utilizando Hooks (useState, useEffect) o un Context API simple para compartir el estado de autenticación a través de la aplicación.

    Experiencia de Usuario (UI): Componentes dedicados para la creación de tareas, visualización del listado y cambio de estados (Completado/Pendiente).


⚙️ Environment Configuration (Frontend)

El Frontend necesita saber dónde encontrar el Backend. Se debe usar un archivo .env para configurar la URL base del API.

# .env (o .env.development)
REACT_APP_API_URL=http://localhost:8000/api
