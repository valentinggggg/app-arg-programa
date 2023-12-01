import { FaTrash } from "react-icons/fa";




export const Tareas = ({tareas, estadoTareas, eliminarTarea, tipoTareas , mostrarCompletas = false})=>{

    const taskTableRows = (doneValue) =>
    
    tareas
        .filter((tarea) => tarea.done === doneValue)
        .map((tarea) => (
            <tr key={tarea.name} className={`trEdit ${tipoTareas}`}>
                <td className={`tareasTable ${tipoTareas}`}>
                {tarea.name}
            <div className={`iconsCont ${tipoTareas}`}>
            <input type="checkbox"
            checked={tarea.done}
            onChange={()=> estadoTareas(tarea)}>
            </input>
                <button onClick={() => eliminarTarea(tarea)}>
                <FaTrash className={`iconsCont ${tipoTareas}`}/>
                </button>
                </div>
                </td>
            </tr>
        
      ));


    return(
    <table className={`tableEdit ${tipoTareas}`}>
        <tbody>
        {
        taskTableRows(mostrarCompletas)
        }
         
        </tbody>
    </table>
    )

    
}