import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [showMessage, setShowMessage] = useState(false);
  const toggleShowMessage = () => setShowMessage(!showMessage);

  const [listaDeTareas, setListaDeTareas] = useState(() => {
    try {
      const storedLista = window.localStorage.getItem('lista');
      return storedLista ? JSON.parse(storedLista) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('lista', JSON.stringify(listaDeTareas));

    } catch (error) {
      console.error(error);
    }
  }, [listaDeTareas]);


  function addTask(task) {
    if (task.task === '') {
      toggleShowMessage();
      return;
    }


    setListaDeTareas([...listaDeTareas, task])
  }

  return (

    <div className='conteiner'>
      {/* Componente de React Bootstrap que muestra un mensaje  
          Se muestra cuando   */}
      <ToastContainer
        className="p-3"
        position='middle-center'
        style={{ zIndex: 9 }}

      >

        <Toast bg='warning' show={showMessage} onClose={toggleShowMessage} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Oh no! Algo salió mal! :(</strong>
            <small>Nueva Tarea</small>
          </Toast.Header>
          <Toast.Body>La tarea es un campo requerido. Intente nuevamente</Toast.Body>
        </Toast>

      </ToastContainer>


      <div className='lista'>
        <div className='h-100 px-5 rounded shadow pt-3' style={{ backgroundColor: '#ED9ED6' }}>

          <h1>Lista de tareas</h1>
          <div className='rounded pb-3 shadow bg-light border border-dark-subtle'>
            <TaskForm onSubmit={(newTask) => addTask(newTask)} />
          </div>

          <TaskList listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />

        </div>
      </div>
      <div className='nueva d-flex align-items-center justify-content-evenly gap-2'>
        {/* <TaskForm setListaDeTareas={setListaDeTareas} /> */}
        <div>
          &copy; <em>{new Date().getFullYear()}</em> | Desarrollado por German Quercia & German Espindola
        </div>

        <img width={150} src='https://campus.argentinaprograma.utn.edu.ar/pluginfile.php/1/core_admin/logocompact/300x300/1699313935/AP_UTN_Compacto_00.png' alt='Logo Argetina Programa'></img>

      </div>
    </div>

  )
}

export default App