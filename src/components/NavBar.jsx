import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";

const menu = [
  { text: "Inicio", link: "/#home" },
  { text: "Productos", link: "/#productos" },
  { text: "Nosotros", link: "/#nosotros" },
];

export const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">CARNICERÍA DEL AG</Navbar.Brand>
      <Nav className="me-auto">
        {menu.map((item) => (
          <Nav.Link key={item.text} href={item.link}>
            {item.text}
          </Nav.Link>
        ))}
      </Nav>
      <CartWidget />
    </Container>
  </Navbar>
);
