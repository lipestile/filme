import React from 'react'
import Pagina from '../components/Pagina'

const objeto = () => {
     
    const carros =[
   {marca: 'Chevrolet', modelo:'Opala', ano:'1971', cor:'azul', foto: 'https://th.bing.com/th/id/OIP.zyrHMa98XZ2lxs1xgf9T-wHaE7?w=263&h=180&c=7&r=0&o=5&pid=1.7'},
   {marca: 'Chevrolet', modelo:'Classic', ano:'2002', cor:'prata', foto: 'https://4.bp.blogspot.com/-ziHJSEJHkZU/Va-1u4rL17I/AAAAAAACLrI/9H2hSz06B0s/s1600/Chevrolet-Classic-2016%2B%25282%2529.jpg'},
   {marca: 'Ford', modelo:'Ka', ano:'2005', cor:'branco', foto: 'https://i.pinimg.com/236x/95/64/ed/9564ed88d6099854a51f9e89b788f2a8--ford-ka-nice-cars.jpg'},
   {marca: 'Chevrolet', modelo:'Omega', ano:'1998', cor:'preto', foto: 'https://turboclass.com.br/images/anuncio/tc-fdxngqd-somente-venda-carro-chevrolet-omega-original/IMG-20230109-WA0119.jpg'},
   {marca: 'VW', modelo:'Fusca', ano:'1947', cor:'verde', foto: 'https://motortudo.com/wp-content/uploads/2023/01/Fusca-Verde-Indaia-8.webp'}

        
]

    return (
    <Pagina titulo="Objeto">
        {carros.map(item=>(
            <div>
                <img src={item.foto} width="200"/>
                <h1>{item.modelo}-{item.marca}</h1>
                <p>Ano: {item.ano}</p>
                <p>Ano: {item.cor}</p>
                <hr/>
            </div>
    ))}

    </Pagina>
  )
}

export default objeto