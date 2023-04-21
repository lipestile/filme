import React, { Component, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagina from '@/components/Pagina';
import apiDeputados from '@/services/apiDeputados';
import apiThemoviedb from '@/services/apiThemoviedb';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';

const index = (props) => {

  return (
    
    <Pagina titulo="XFILMES">
      <Row md={'4'}>
             {props.filmes.map(item=>(
                <Col className=''>
                <div>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top"  src= {'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <p>{item.overview}</p>
                        <p>✨{item.vote_average}</p>
                        <Link className='btn btn-success' href={'/filmes/' + item.id}>Detalhes</Link>
                      </Card.Body>
                    </Card>
                </div>
             
                </Col>
              ))}
          
      </Row>
      

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
