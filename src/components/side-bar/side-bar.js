import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png"
import "./side-bar.css";
import backgroundVideo from "../../assets/video/video.m4v"

import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const SideBar = () => {
 
  const location = useLocation();
  const currentPath = location.pathname;

  return (

    <div>
        <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   
    <Navbar expand="lg" className="admin-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img alt="Turkey Rights Monitor" src={logo} className="img-fluid " />
        </Navbar.Brand>
        <Dropdown.Divider />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-menu" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className={currentPath === "/" ? "active" : ""}>
              Ana Sayfa
            </Nav.Link>
            <Nav.Link as={Link} to="/kitlesel" className={currentPath === "/kitlesel" ? "active" : ""}>
              Kitlesel Gözaltılar 
            </Nav.Link>
            <Nav.Link as={Link} to="/olumler" className={currentPath === "/olumler" ? "active" : ""}>
               Yaşam Hakkı İhlalleri
            </Nav.Link>
            <Nav.Link as={Link} to="/hassasgruplar" className={currentPath === "/hassasgruplar" ? "active" : ""}>
             Hassas Gruplar
            </Nav.Link>
            <Nav.Link as={Link} to="/elements-produits" className={currentPath === "/elements-produits" ? "active" : ""}>
               İhraçlar
            </Nav.Link>
            <Nav.Link as={Link} to="/illegaliade" className={currentPath === "/illegaliade" ? "active" : ""}>
             Hukuka Aykırı Sınır Dışı ve İadeler
            </Nav.Link>
            <Nav.Link as={Link} to="/factures" className={currentPath === "/factures" ? "active" : ""}>
              Zorla Kaybetmeler
            </Nav.Link>
            <Nav.Link as={Link} to="/employees" className={currentPath === "/employees" ? "active" : ""}>
           Sosyal ve Ekonomik Hak İhlalleri
            </Nav.Link>
            <Nav.Link as={Link} to="/calendrier" className={currentPath === "/calendrier" ? "active" : ""}>
              Cezaevindeki Hak İhlalleri
            </Nav.Link>
            <Nav.Link as={Link} to="/kapatilankurumlar" className={currentPath === "/kapatilankurumlar" ? "active" : ""}>
               Kapatılan Kurumlar
            </Nav.Link>
            <Nav.Link as={Link} to="/statistiques" className={currentPath === "/statistiques" ? "active" : ""}>
               Terör Suçu İstatistikleri
            </Nav.Link>
            <Nav.Link as={Link} to="/statistiques" className={currentPath === "/statistiques" ? "active" : ""}>
              Yargı Bağımsızlığı
            </Nav.Link>
            <Nav.Link as={Link} to="/statistiques" className={currentPath === "/statistiques" ? "active" : ""}>
              Nefret Söylemi
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default SideBar;
