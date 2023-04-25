import React from 'react'
import apiThemoviedb from '@/services/apiThemoviedb'
import Pagina from '@/components/Pagina'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'

const Detalhes = ({ ator, imgator, popular, tvpopular}) => {
    return (
        <Pagina titulo={ator.name}>
            <Row>
                <Col md={3}>
                    <Card.Img variant="top" title={ator.name} src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>
                <Col md={9}>

                    <p><strong>Data de Nascimento:</strong>{ator.birthday}</p>
                    <br></br>
                    <p><strong>Local de Nascimento:</strong>{ator.place_of_birth}</p>
                    <br></br>
                    <p>{ator.biography}</p>
                </Col>
            </Row>
            <h2>Imagens</h2>
            <Row>
                {imgator.map(item => (
                    <Col className='mb-3' md={2}>
                            <Card.Img variant="top" title={item.name} src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
                    </Col>
                ))}
            </Row>
            <h2>Filmes que atuou</h2>

            <Row>
                {popular.map(item => (
                    <Col className='mb-3' md={2}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img variant="top" title={item.name} src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>
            <h2>Séries de TV que atuou</h2>
            <Row>
                {tvpopular.map(item => (
                    <Col className='mb-3' md={2}>
                        <Link href={'/filmes/' + item.id}>
                            <Card.Img variant="top" title={item.name} src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} />
                        </Link>
                    </Col>
                ))}
            </Row>






        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {
    const id = context.params.id

    const resAtor = await apiThemoviedb.get("/person/" + id + "?language=pt-BR")
    const ator = resAtor.data

    const resImgator = await apiThemoviedb.get("/person/" + id + "/images")
    const imgator = resImgator.data.profiles

    const resPopular = await apiThemoviedb.get("/person/"+ id+ "/movie_credits")
    const popular = resPopular.data.cast

    const restvpopular = await apiThemoviedb.get("/person/"+ id+ "/tv_credits")
    const tvpopular = restvpopular.data.cast







    return {
        props: { ator, imgator,popular,tvpopular},
    }


}
