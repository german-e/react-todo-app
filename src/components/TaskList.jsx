import React, { useState, useEffect } from 'react';
import './styles.css'
import TaskItem from './TaskItem';
import Table from 'react-bootstrap/Table';
import { Breadcrumb } from 'react-bootstrap';

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {

    const totalIncompletas = listaDeTareas.filter(t => !t.isCompleted);
    const totalCompletas = listaDeTareas.filter(t => t.isCompleted);

    const [view, setChangeView] = useState('Todos');

    const [filterList, setFilterList] = useState(listaDeTareas);

    useEffect(() => {

        switch (view) {
            case 'Todos':
                setFilterList(listaDeTareas);
                break;
            case 'Completas':
                setFilterList(listaDeTareas.filter(t => t.isCompleted))
                break;
            case 'Pendientes':
                setFilterList(listaDeTareas.filter(t => !t.isCompleted))
                break;
        }
    }, [view, listaDeTareas]);

    function deleteTask(id) {

        setListaDeTareas(prev => {
            let listaFiltrada = prev.filter(t => t.id != id);
            return listaFiltrada;
        })


    }


    function updateCompleteTask(id) {

        console.log('Entro en onChange, el valor de ID es: ', id)

        //Recorre la lista de tareas con map.
        const tasks = listaDeTareas.map(task => {
            if (task.id === id) {      //cuando encuentra el valor del id
                task.isCompleted = !task.isCompleted;   //Actualiza el valor de la propiedad isComplete
                //Si es true, lo cambia al contrario
                return task;
            }
            return task;
        })

        console.log(tasks);
        //Actualizamos la lista
        setListaDeTareas(tasks);


    }





    return (

        <>
            <div className='h-100 px-5 rounded shadow pt-3' style={{ backgroundColor: '#ED9ED6' }}>
                <h1>Lista de tareas</h1>



                <div className='d-flex align-items-center justify-content-center'>

                    <button className='btn btn-link active' onClick={() => setChangeView('Completas')}>Completas</button>
                    <span className='btn badge text-bg-primary'> {totalCompletas.length}</span>




                    <div className='mx-5'>

                        <button className='btn btn-link text-danger' onClick={() => setChangeView('Pendientes')}>Pendientes</button>
                        <span className='badge text-bg-danger'> {totalIncompletas.length}</span>
                    </div>




                    <button className='btn btn-primary mb-3 mx-5' onClick={() => setChangeView('Todos')}>TODOS</button>

                </div>


                <table className='table hover stripped shadow' >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dia</th>
                            <th>Hora</th>
                            <th>Tarea</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filterList.length > 0 
                        
                        ? filterList.map((task, index) => (
                            <TaskItem task={task}
                                key={index}
                                onUpdateCompleted={updateCompleteTask}
                                onDeleteTask={deleteTask}
                                index={index}
                            />
                        )) 
                        : <tr>
                            <td colSpan={5}>
                                
                                <p>{`No hay tareas ${view}`}</p>
                                

                            </td>
                        </tr>}

                    </tbody>
                </table>
            </div>
        </>
    )
};

export default TaskList;