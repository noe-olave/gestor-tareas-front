import React from 'react';

function TodoList({ tasks, onToggle }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    Tarea: {task.title}
                    <button onClick={() => onToggle(task.id, task.completed)}>
                        {task.completed ? 'Deshacer' : 'Completar'}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;