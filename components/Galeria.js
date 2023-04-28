import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {
    const size = props.size || 2
    const link = props.link || "/filmes"
    return (
        <>
            {
                props.titulo &&
                <h2>{props.titulo}</h2>
            }
            <Row>
                {props.lista.map(item => (
                    <Col className='mb-3' md={size}>
                        <Link href={link + item.id}>
                            {
                                item[props.foto]
                                    ?
                                    < Card.Img variant="top" title={item.name} src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                                    :
                                    <Card.Img variant="top" title={item.name} src={"https://th.bing.com/th/id/R.7103fd7b7ec078739116e3aff3931a35?rik=syEMFFbDAWzTEg&riu=http%3a%2f%2fwww.filmfodder.com%2freviews%2fimages%2fposter-not-available.jpg&ehk=PfMvu3vp38YEcydIuJqI8GLpTaFSmQ5vEU1nY%2bOkq2E%3d&risl=&pid=ImgRaw&r=0"} />

                            }
                        </Link>
                    </Col>
                ))}
            </Row>


        </>
    )
}

export default Galeria
