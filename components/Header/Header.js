import { useState } from "react";
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { HeaderContainer, Container } from "./styles";
//import LogoWhite from "";
import Link from "next/link";

function Header() {
  const [isOpen, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isOpen);
  };

  return (
    <HeaderContainer>
      <div className="nav-wrapper" />
      <Container expand="md" dark>
        <div className="container">
          <NavbarBrand href="/" style={{ width: 300 }}>
            <Link href="/">
            <div/>
            </Link>
          </NavbarBrand>
          <NavbarToggler
            style={{ position: "absolute", right: 20, top: 25 }}
            onClick={toggle}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="#">
                  <a className="nav-link">Recarga</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#">
                  <a className="nav-link">Serviços Digitais</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#">
                  <a className="nav-link">Internet</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#">
                  <a className="nav-link">Móvel</a>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  Atendimento
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div> 
      </Container>
    </HeaderContainer>
  );
}

export default Header;