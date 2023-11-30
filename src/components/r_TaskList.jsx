import React from 'react';
import './styles.css'
import TaskItem from './r_taskItem';

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {

   
    return (
        <>
            <div id=''>
                <h1>Lista de tareas</h1>
                <ul>
                    {listaDeTareas.map((jsonObj, index) => (
                        <TaskItem jsonObj={jsonObj} index={index} setListaDeTareas={setListaDeTareas}/>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default TaskList;