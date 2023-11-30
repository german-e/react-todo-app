import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';

import TaskList from './components/TaskList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

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


  function addTask(task){
    if (task.task === ''){
      toggleShowMessage();
      return;
    }
    setListaDeTareas([...listaDeTareas, task])
  }


  return (
    <>

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

          <TaskList listaDeTareas={listaDeTareas} setListaDeTareas={setListaDeTareas} />
        </div>
        <div className='nueva'>
          {/* <TaskForm setListaDeTareas={setListaDeTareas} /> */}
          <TaskForm onSubmit={(newTask) => addTask(newTask)} />
        </div>
      </div>
    </>
  )
}

export default App