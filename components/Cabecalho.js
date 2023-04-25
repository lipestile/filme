import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";


const Cabecalho = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movies</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Casa</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/filmes">Populares</NavDropdown.Item>
              <NavDropdown.Item href="/filmes/lancamento">
                Lançamento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Em cartaz</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Top Rated
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho