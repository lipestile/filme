import Pagina from '@/components/Pagina'
import apiThemoviedb from '@/services/apiThemoviedb'
import Link from 'next/link'
import React from 'react'
import { Card, NavItem } from 'react-bootstrap'


const Detalhes = ({filme}) => {
     

  return (
    <Pagina titulo={filme.title}>
    <div>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top"  src= {'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                      <Card.Body>
                        <Card.Title>{filme.title}</Card.Title>
                        <p>{filme.overview}</p>
                        <p>{filme.vote_average}</p>
                        <Link className='btn btn-success' href={'/filmes/' + filme.id}>Detalhes</Link>
                      </Card.Body>
                    </Card>
                </div>
    </Pagina>
  )
}

export default Detalhes
export async function getServerSideProps(context) {

    const id = context.params.id
    const resultado = await apiThemoviedb.get("/movie/" + id)
    const filme = resultado.data
  
    return {
      props: {filme},
    }
  }
