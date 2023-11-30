import './Body.css'
import { useState } from 'react'

export default function Body() {

    const [nuevaTarea, setNuevaTarea] = useState ()

   const SubmitTask = (e) => {
        e.preventDefault();
        localStorage.setItem("Tarea", nuevaTarea)
        setNuevaTarea('')
    }
 


    return(
    <div className="Body-container">
        <h1 className="text-5xl font-bold text-center">Lista de Tareas Online</h1>
        <div className="ListaTareas">
            <form onSubmit={SubmitTask}>
                <input
                className='inputTask'
                type='text'
                placeholder='¿Que queres hacer?'
                value={nuevaTarea}
                onChange={(event) => setNuevaTarea(event.target.value)}
                />
                <button className='buttonTask'>
                Agregar Tarea
                </button>
            </form>
        </div>
    </div>
    )
}