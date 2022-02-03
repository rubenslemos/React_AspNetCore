import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export default function Menu() {
  return (
    <>
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} activeClassName='active' to="/" href="#home">To/Do-List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} activeClassName='active' to="/clientes/lista" href="#home">Clientes</Nav.Link>
              <Nav.Link href="#link" as={NavLink} activeClassName='active' to="/atividades/lista">Atividades</Nav.Link>
            </Nav>
            <Nav>              
              <NavDropdown align="end" title="Rubens" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Configurações</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Compartilhar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
