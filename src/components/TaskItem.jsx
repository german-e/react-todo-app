import { useEffect } from 'react';
import './styles.css'


const TaskItem = ({ task, index, onUpdateCompleted, onDeleteTask }) => {

    // const borrarTareaCorto = (index) => {
    //     setListaDeTareas(prevLista => prevLista.filter((_, i) => i !== index)) //funca bien
    // };

    // const eliminarTarea = (id) => {
    //     setListaDeTareas(prev => {
    //         let listaFiltrada = prev.filter(t => t.id != id);
    //         return listaFiltrada;
    //     })
    // }

    // const borrarTarea = function (event) {
    //     const idDelElemento = Number(event.target.id);

    //     setListaDeTareas(function (prevLista) {
    //         return prevLista.filter(function (_, i) {
    //             return i !== idDelElemento;
    //         });
    //     });
    // };



    function handleClickDeleteTask(id){
        onDeleteTask(id);
    }

    function handleClickCompleteTask(id) {      

        onUpdateCompleted(id);  //Llamamos a la función que recibimos como propiedad que está 
                                //implementada en TaskList y que se encarga de actualizar la lista



        // const idDelElemento = id;

        // setListaDeTareas((prevLista) => {
        //     // Create a new array to avoid mutating the previous state
        //     const updatedLista = [...prevLista];
        //     // Update the completed status of the task at idDelElemento
        //     updatedLista[idDelElemento] = { ...updatedLista[idDelElemento], completada: !updatedLista[idDelElemento].completada };
        //     // Return the updated array
        //     return updatedLista;
        //});
    }

    let clase = task.isCompleted ? 'task-completa' : '';   //Para agregar estilos personalizados a las tareas completas


    return (
        <>
            <tr className={clase}>
                <td>{index + 1}</td>                
                <td>{task.date}</td>
                <td>{task.time}</td>
                <td>{task.task}</td>
                
                
                <td>                    
                    <button className='btn' onClick={() => handleClickCompleteTask(task.id)}><i className="fas fa-check text-success"></i></button>
                    <button className='btn' onClick={() => handleClickDeleteTask(task.id)}><i className="fas fa-trash text-danger"></i></button>
                </td>
            </tr>
        </>
    )
}

export default TaskItem;
