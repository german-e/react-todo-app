import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const TaskForm = (lista) => {

    const [ID, setId] = useState(3);

    const agregarTarea = () => {

        const tareaParaAgregar = {
            id: "",
            dia: "",
            hora: "",
            tarea: "",
            completada: false,
        }

        const fecha1 = document.getElementById("fechaElegir").value;
        tareaParaAgregar.dia = fecha1;

        const hora1 = document.getElementById("horaElegir").value;
        tareaParaAgregar.hora = hora1;

        const texto1 = document.getElementById("tareaEscrita").value;
        tareaParaAgregar.tarea = texto1;

        const obteberId = () => { setId(ID + 1) }
        obteberId()
        tareaParaAgregar.id = ID

        // Actualizar el estado utilizando la función setListaDeTareas
        lista.setListaDeTareas(prevLista => [...prevLista, tareaParaAgregar]);

    };

    const handleSubmit = (event) => {

        event.preventDefault();
        agregarTarea();

    }


    return (
        <>
            <form onSubmit={handleSubmit} className="agregar">
                <input type="Date" id="fechaElegir" />
                <input type="Time" id="horaElegir" />
                <input type="text" rows="5" id="tareaEscrita" />
                <Button variant="success" onClick={agregarTarea} >Crear tarea</Button>
            </form>
        </>
    )
}

export default TaskForm;
