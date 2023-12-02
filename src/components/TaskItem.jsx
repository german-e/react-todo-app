import { useEffect } from 'react';
import './styles.css'


const TaskItem = ({ task, index, onUpdateCompleted, onDeleteTask }) => {

    function handleClickDeleteTask(id){
        onDeleteTask(id);
    }

    function handleClickCompleteTask(id) {     
        onUpdateCompleted(id);  //Llamamos a la función que recibimos como propiedad que está 
                                //implementada en TaskList y que se encarga de actualizar la list
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
