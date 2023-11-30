import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './styles.css'

const TaskItem = ({ jsonObj, index, setListaDeTareas }) => {


    console.log("elvalor del indice es ", index)

    const borrarTareaCorto = (event) => {
        const idDelElemento = Number(event.target.id);
        setListaDeTareas(prevLista => prevLista.filter((_, i) => i !== idDelElemento)) //funca bien
    };


    const borrarTarea = function (event) {
        const idDelElemento = Number(event.target.id);

        setListaDeTareas(function (prevLista) {
            return prevLista.filter(function (_, i) {
                return i !== idDelElemento;
            });
        });
    };



    function completada(id) {
        const idDelElemento = id;

        setListaDeTareas((prevLista) => {
            // Create a new array to avoid mutating the previous state
            const updatedLista = [...prevLista];
            // Update the completed status of the task at idDelElemento
            updatedLista[idDelElemento] = { ...updatedLista[idDelElemento], completada: !updatedLista[idDelElemento].completada };
            // Return the updated array
            return updatedLista;
        });
    }


    return (

        <>
            <div className="mb-3">
                <p>
                    {index + 1}  --
                    <strong>ID:</strong> {jsonObj.id} ||
                    <strong>dia:</strong> {jsonObj.dia} ||
                    <strong>hora:</strong> {jsonObj.hora} ||
                    <strong>tarea:</strong> {jsonObj.tarea} ||
                    <strong>completada:</strong> {`${jsonObj.completada}`}
                    <Button variant="outline-danger" id={`${index}`} onClick={borrarTarea}>X Eliminar</Button>
                    <Button variant="outline-warning" onClick={() => completada(index)}>Completada</Button>
                </p>
            </div>
        </>

    )

}

export default TaskItem;