import React from 'react'
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';

const array = () => {

  const carros =['opala', 'Classic','ka','omega', 'Fuscão']


  return (
    <>
    <Pagina titulo="array" ></Pagina>
        <ol>

        {carros.map(item=>(
          <li>{item}</li>
        ))}
        </ol>
    </>
    
  )
}

export default array