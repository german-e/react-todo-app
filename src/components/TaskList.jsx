import React, { useState, useEffect } from "react";
import "./styles.css";
import TaskItem from "./TaskItem";

const TaskList = ({ listaDeTareas, setListaDeTareas }) => {
  const totalIncompletas = listaDeTareas.filter((t) => !t.isCompleted);
  const totalCompletas = listaDeTareas.filter((t) => t.isCompleted);

  const [view, setChangeView] = useState("Todos");
  const [date, setDate] = useState("");
  const [filterList, setFilterList] = useState(listaDeTareas);

  useEffect(() => {
    switch (view) {
      case "Todos":
        setFilterList(listaDeTareas);
        break;
      case "Completas":
        setFilterList(listaDeTareas.filter((t) => !t.isCompleted));
        break;
      case "Pendientes":
        setFilterList(listaDeTareas.filter((t) => t.isCompleted));
        break;
      case "date":
        setFilterList(
          listaDeTareas.filter(
            (t) => t.date === date.toLocaleDateString("es-ES", "dd-MM-yyyy")
          )
        );
        break;
    }
  }, [view, listaDeTareas]);

  function deleteTask(id) {
    setListaDeTareas((prev) => {
      let listaFiltrada = prev.filter((t) => t.id != id);
      return listaFiltrada;
    });
  }

  function updateCompleteTask(id) {
    console.log("Entro en onChange, el valor de ID es: ", id);

    //Recorre la lista de tareas con map.
    const tasks = listaDeTareas.map((task) => {
      if (task.id === id) {
        //cuando encuentra el valor del id
        task.isCompleted = !task.isCompleted; //Actualiza el valor de la propiedad isComplete
        //Si es true, lo cambia al contrario
        return task;
      }
      return task;
    });

    console.log(tasks);
    //Actualizamos la lista
    setListaDeTareas(tasks);
  }

  function onChangeDate(date) {
    console.log("date   ", date.toLocaleDateString("es-ES", "yyyy/mm/dd"));

    setDate(date);
    setChangeView("date");
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mx-3 mt-5 mb-3">
        <div className="d-flex gap-3">          
          <button
            type="button"
            class="btn btn-danger position-relative shadow-sm"
            onClick={() => setChangeView("Completas")}
          >
            Pendientes <i class="fas fa-bell p-2"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalIncompletas.length}
              <span class="visually-hidden">Tareas Pendientes</span>
            </span>
          </button>

          <button
            type="button"
            class="btn btn-success position-relative shadow-sm"
            onClick={() => setChangeView("Pendientes")}
          >
            Completadas <i class="fas fa-check-double p-2"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCompletas.length}
              <span class="visually-hidden">Tareas Completadas</span>
            </span>
          </button>

          <button
            type="button"
            class="btn btn-primary position-relative shadow-sm"
            onClick={() => setChangeView("Todos")}
          >
            Todas <i class="fas fa-list p-2"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {listaDeTareas.length}
              <span class="visually-hidden">Mostrar todas las tareas</span>
            </span>
          </button>
        </div>
      </div>

      <table className="table hover table-striped shadow">
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
          {filterList.length > 0 ? (
            filterList.map((task, index) => (
              <TaskItem
                task={task}
                key={index}
                onUpdateCompleted={updateCompleteTask}
                onDeleteTask={deleteTask}
                index={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan={5}>
                <p>{`No hay tareas ${view}`}</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
