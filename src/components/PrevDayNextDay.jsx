import { useState } from 'react';
import {addDays, subDays, toDate} from 'date-fns';
 

function PrevDayNextDay({onClickDate}) {

    const fechaActual = new Date();
    // let opciones = { year: 'numeric', month: 'short', day: 'numeric' };
    let opciones = { month: 'short', day: 'numeric' };

    
    const [dateClick, setDateClick] = useState(new Date());
    // const diasAnteriores = [fechaActual.getDate() - 1, fechaActual.getDate() - 2, fechaActual.getDate() - 3];
    const diasAnteriores = [subDays(fechaActual, 1), subDays(fechaActual, 2), subDays(fechaActual, 3)];
    // const diasPosteriores = [fechaActual.getDate() + 1, fechaActual.getDate() + 2, fechaActual.getDate() + 3];
    const diasPosteriores = [addDays(fechaActual, 1), addDays(fechaActual, 2), addDays(fechaActual, 3)];



    const onChangeDateClick = (date) => {
        onClickDate(date);
    }


    return (
    <div>
        
        
            {diasAnteriores.map((dia, index) => (
            // <li key={index}>{formatearFecha(dia)}</li>
            <button 
                className='btn btn-link' 
                key={index} 
                onClick={() => onChangeDateClick(dia)}                
                >{dia.toLocaleDateString('es-ES', opciones)}
                
            </button>
            ))}
        


                <button className='btn btn-link active'>{fechaActual.toLocaleDateString('es-ES', opciones)}</button>
        
            {diasPosteriores.map((dia, index) => (
            <button className='btn btn-link' key={index}>{dia.toLocaleDateString('es-ES', opciones)}</button>
            ))}
        
    </div>
  );
  }

export default PrevDayNextDay;