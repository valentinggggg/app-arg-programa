
import './App.css'
import Body from './components/Body'
import { useState, useEffect } from 'react';
import { FaTrash } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";


function App() {

  function crearTareas(nombreTarea) {
    if (!itemTarea.find(tareas => tareas.name === nombreTarea)){
      setItemTarea([...itemTarea, {name: nombreTarea, done: false}])
    }
}

const [itemTarea, setItemTarea] = useState([
  
])

useEffect(() => {
  let datos = localStorage.getItem('TareasHistorial');
  if (datos){
    setItemTarea(JSON.parse(datos));
  } 
}, [ ] )

useEffect(() => {
  localStorage.setItem('TareasHistorial', JSON.stringify(itemTarea))
},[ itemTarea ])


  return (
   <div className='Body-container'>
    <h1 className="text-5xl font-bold text-center">Lista de Tareas Online</h1>
    <div className='ListaTareas'>
      <Body crearTareas={crearTareas}/>
      <table className='tableEdit'>
            <tbody>
            {
                itemTarea.map(tarea => (
                
                <tr key={tarea.name} className='trEdit'>
                    <td className='tareasTable'>
                        {tarea.name}
                  <div className='iconsCont'>
                  <button>
                  <FaTrash className='editIcon'/>
                  </button>
                  <button>
                  <FiCheck className='editIcon'/>
                  </button>
                  </div>
                    </td>
                </tr>
                ))
            }
             
            </tbody>
        </table>
    </div>

   </div>

  )
}

export default App
