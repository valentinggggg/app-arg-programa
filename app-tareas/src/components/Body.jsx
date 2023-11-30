import './Body.css'
import { useState} from 'react'

import PropTypes from 'prop-types';

Body.propTypes = {
    crearTareas: PropTypes.func.isRequired,
  };


export default function Body(props) {



    const [nuevaTarea, setNuevaTarea] = useState ()

   const SubmitTask = (e) => {
        props.crearTareas(nuevaTarea);
        e.preventDefault();
        localStorage.setItem('Ultima-Tarea', nuevaTarea);
        setNuevaTarea('');
    }



    return(
    <div>
        <div>
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