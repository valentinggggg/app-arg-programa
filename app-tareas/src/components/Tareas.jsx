import { FaTrash } from "react-icons/fa";




export const Tareas = ({tareas, estadoTareas, eliminarTarea, mostrarCompletas = false})=>{

    const taskTableRows = (doneValue) =>
    
    tareas
        .filter((tarea) => tarea.done === doneValue)
        .map((tarea) => (
            <tr key={tarea.name} className='trEdit'>
                <td className='tareasTable'>
                {tarea.name}
            <div className='iconsCont'>
            <input type="checkbox"
            checked={tarea.done}
            onChange={()=> estadoTareas(tarea)}>
            </input>
                <button onClick={() => eliminarTarea(tarea)}>
                <FaTrash className='editIcon'/>
                </button>
                </div>
                </td>
            </tr>
        
      ));


    return(
    <table className='tableEdit'>
        <tbody>
        {
        taskTableRows(mostrarCompletas)
        }
         
        </tbody>
    </table>
    )

    
}