import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import apiDeputados from '@/services/apiDeputados';
import apiThemoviedb from '@/services/apiThemoviedb';

const index = (props) => {

  return (
    
    <Pagina titulo="XFILMES">
      {props.filmes.map(item=>(
        <p>{item.title}</p>
        
      
      
      
    ))}
       
      
      
        
  

    </Pagina>
    
  )
}

export default index

export async function getServerSideProps(context) {
  const resultado = await apiThemoviedb.get("/movie/popular")
  const filmes = resultado.data.results

  return {
    props: {filmes},
  }
}
