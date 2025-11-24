import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import axios from 'axios'; // Se requiere instalar: npm install axios

const API_URL = 'http://localhost:8000/api/tasks/'; // URL del backend Django

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulación: Asumimos que el usuario está logueado y tenemos un token
  const AUTH_TOKEN = 'TU_TOKEN_DE_AUTENTICACION_AQUI';

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          'Authorization': `Bearer <!--MATHFORMULA0-->{API_URL}<!--MATHFORMULA1-->{AUTH_TOKEN}`
        }
      });
      fetchTasks(); // Refrescar la lista
    }
    ;

    if (loading) {
      return <div>Cargando tareas...</div>;
    }

    return (
        <div className="App">
          <h1>Mi Lista de Tareas</h1>
          {/* Componente que renderiza la lista */}
          <TodoList tasks={tasks} onToggle={handleToggleComplete}/>
          {/* Componente para Añadir Tareas (omito el código por simplicidad) */}
        </div>
    );
  }
}
  export default App;
