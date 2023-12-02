import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


import './styles.css';




const TaskForm = ({ onSubmit }) => {


    



    const [date, setDate] = useState(getDateWithFormat());
    const [time, setTime] = useState(getTimeWithFormat());
    const [task, setTask] = useState('');


    function getDateWithFormat() {

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        //return `${day}-${month}-${year}`;
        return `${year}-${month}-${day}`;
    }
    

    function customFormatDate(date){

        //2023-12-02
        const [y, m, d] = date.split('-');
        
        return `${d}/${m}/${y}`;

    }
    function getTimeWithFormat() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }




    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({
            id: crypto.randomUUID(),
            date: customFormatDate(date),
            time,
            task,
            isCompleted: false
        }
        );

        setTask('');

    }

    



    return (
        <>
           


            <form onSubmit={handleSubmit} className="agregar pt-3">
                <div className='d-flex align-items-center justify-content-center gap-3'>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type="date"
                            onChange={(ev) => setDate(ev.target.value)}
                            value={date}
                        />
                    </div>

                    <div className='form-group'>
                        <input type="time"
                            className='form-control'
                            onChange={(ev) => setTime(ev.target.value)}
                            value={time}
                        />
                    </div>

                    <div className='form-group col-md-6'>
                        <input type="text"
                            className='form-control'
                            onChange={(ev) => setTask(ev.target.value)}
                            value={task}
                            autoFocus />
                    </div>

                    <Button type='submit' variant="success" >Crear tarea</Button>
                </div>
            </form>





        </>
    )
}

export default TaskForm;
