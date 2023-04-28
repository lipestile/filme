import Galeria from '@/components/Galeria'
import Pagina from '@/components/Pagina'
import apiThemoviedb from '@/services/apiThemoviedb'
import Link from 'next/link'
import React from 'react'
import { Card, CardImg, Col, NavItem, Row } from 'react-bootstrap'


const Detalhes = ({ filme, atores }) => {


  return (
    <Pagina titulo={filme.title}>
      <Row className='bg-success'>
        <Col md={3}>
          <Card.Img src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />
        </Col>
        <Col md={9} className="bg-success">
          <p><strong>Money💰:    </strong>{filme.budget}</p>
          <p><strong>Data📅:   </strong>{filme.release_date}</p>
          <p><strong>Duração⏰:   </strong>{filme.runtime}</p>
          <p><strong>Nota📈:   </strong>{filme.vote_average}</p>
          <div>
            <ul>
              {filme.genres.map(item => (
                <li>{item.name}</li>
              ))}
            </ul>
          </div>
          <p>{filme.overview}</p>
        </Col>
      </Row>
      <h2>Atores</h2>
      
      <Row>
      <Galeria  lista={atores} size={1} foto="profile_path" link="/atores/"></Galeria>
      

      </Row>

    </Pagina>
  )
}

export default Detalhes
export async function getServerSideProps(context) {

  const id = context.params.id

  const resultado = await apiThemoviedb.get("/movie/" + id + "?language=pt-BR") 
  const filme = resultado.data

  const resAtores = await apiThemoviedb.get("/movie/" + id + '/credits?language=pt-BR')
  const atores = resAtores.data.cast





  return {
    props: { filme, atores },
  }
}
