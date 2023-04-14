import React, { useEffect, useState } from 'react'
import Pagina from '../../components/Pagina'
import apiDeputados from '../../services/apiDeputados'

const hooks = () => {

    const [deputados, setDeputados] = useState([])
    useEffect(()=>{
        apiDeputados.get("/deputados").then(resultado=>{
            setDeputados(resultado.data.dados)
        })
    }, [])
    

  return (
    <Pagina titulo="Deputados">
        {deputados.map(item=>(
            <div>
            <strong>{item.nome}</strong>
            <br></br>
            <img src={item.urlFoto}  height={200}></img>
            <hr></hr>
            </div>
                

           
        ))}
    </Pagina>
  )
}

export default hooks