
import './App.css'
import Body from './components/Body'
import { useState, useEffect } from 'react';
import { Tareas } from './components/Tareas';



function App() {

  function crearTareas(nombreTarea) {
    if (!itemTarea.find(tareas => tareas.name === nombreTarea)){
      setItemTarea([...itemTarea, {name: nombreTarea, done: false}])
    }
}

const [itemTarea, setItemTarea] = useState([
  
])

const [mostrarCompletas, setMostrarCompletas] = useState(false);

const estadoTarea = etarea => {
  setItemTarea( 
    itemTarea.map(e => (e.name === etarea.name) ? {...e, done: !e.done}: e)
  )
}

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
      <Tareas tareas={itemTarea} estadoTareas={estadoTarea}/>

      <div>
        <button onClick={e=>setMostrarCompletas(!mostrarCompletas)}> Tareas Terminadas </button>
      </div>
      {
        mostrarCompletas === true && (
          <Tareas tareas={itemTarea} estadoTareas={estadoTarea} mostrarCompletas={mostrarCompletas}/>  
        )
      }

     
    </div>
   </div> 

  )
}

export default App
