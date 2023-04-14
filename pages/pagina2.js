import React from 'react'
import Pagina from '../components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rodape from '../components/Rodape';
import Cabecalho from '../components/Cabecalho';



const pagina2 = () => {
  return (
    <>
    <Cabecalho/>
    <Pagina/>
    <div>pagina2</div>
    <Rodape></Rodape>
    </>
  )
}

export default pagina2