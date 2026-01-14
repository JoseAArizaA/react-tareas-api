
import { useEffect, useState } from "react";
import { taskService } from "../services/taskService";
import type { Task } from "../types/Task";

function TaskList() {
    const [tareas, setTareas] = useState<Task[]>([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        taskService.getAll().then(listaTareas => {
            setTareas(listaTareas);
            setCargando(false);
        });
    }, []);

    return (
        <ul>
            {cargando ? (
                <li>Cargando...</li>
            ) : (
                tareas && tareas.map(tarea => (
                <li key={tarea.id}>{tarea.title}</li>
            )))}
        </ul>
    )
}

export default TaskList;