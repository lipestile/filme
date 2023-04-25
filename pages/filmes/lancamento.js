import apiThemoviedb from '@/services/apiThemoviedb'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Pagina from '@/components/Pagina'

const lancamento = ({populares}) => {
    return (
        <Pagina>
            <Row md={'4'}>
                {populares.map(item => (
                    <Col className=''>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.backdrop_path} />
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

export default lancamento

export async function getServerSideProps(context) {
    const resultado = await apiThemoviedb.get("/movie/upcoming")
    const populares = resultado.data.results

    return {
        props: { populares },
    }
}

