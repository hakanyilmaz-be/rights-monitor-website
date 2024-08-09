import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./side-bar.css";
import backgroundVideo from "../../assets/video/video.m4v";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [expanded, setExpanded] = useState(false); // Menünün açık/kapalı durumunu takip eder

  const handleToggle = () => {
    setExpanded(!expanded); // Menü durumunu tersine çevirir
  };

  const handleNavClick = () => {
    setExpanded(false); // Bir menü öğesine tıklandığında menüyü kapatır
  };

  return (
    <div>
      <video autoPlay loop muted className="video-background">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar expand="lg" className="admin-navbar" variant="dark" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img alt="Turkey Rights Monitor" src={logo} className="img-fluid " />
          </Navbar.Brand>
          <Dropdown.Divider />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
          <Navbar.Collapse className="navbar-menu" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className={currentPath === "/" ? "active" : ""} onClick={handleNavClick}>
                Ana Sayfa
              </Nav.Link>
              <Nav.Link as={Link} to="/kitlesel" className={currentPath === "/kitlesel" ? "active" : ""} onClick={handleNavClick}>
                Kitlesel Gözaltılar 
              </Nav.Link>
              <Nav.Link as={Link} to="/olumler" className={currentPath === "/olumler" ? "active" : ""} onClick={handleNavClick}>
                Yaşam Hakkı İhlalleri
              </Nav.Link>
              <Nav.Link as={Link} to="/hassasgruplar" className={currentPath === "/hassasgruplar" ? "active" : ""} onClick={handleNavClick}>
                Hassas Gruplar
              </Nav.Link>
              <Nav.Link as={Link} to="/ihraclar" className={currentPath === "/ihraclar" ? "active" : ""} onClick={handleNavClick}>
                İhraçlar
              </Nav.Link>
              <Nav.Link as={Link} to="/illegaliade" className={currentPath === "/illegaliade" ? "active" : ""} onClick={handleNavClick}>
                Hukuka Aykırı Sınır Dışı ve İadeler
              </Nav.Link>
              <Nav.Link as={Link} to="/kaybedilenler" className={currentPath === "/kaybedilenler" ? "active" : ""} onClick={handleNavClick}>
                Zorla Kaybetmeler
              </Nav.Link>
              <Nav.Link as={Link} to="/sosyal-ekonomik-hak-ihlali" className={currentPath === "/sosyal-ekonomik-hak-ihlali" ? "active" : ""} onClick={handleNavClick}>
                Sosyal ve Ekonomik Hak İhlalleri
              </Nav.Link>
              <Nav.Link as={Link} to="/cezaevi-hak-ihlali" className={currentPath === "/cezaevi-hak-ihlali" ? "active" : ""} onClick={handleNavClick}>
                Cezaevindeki Hak İhlalleri
              </Nav.Link>
              <Nav.Link as={Link} to="/kapatilankurumlar" className={currentPath === "/kapatilankurumlar" ? "active" : ""} onClick={handleNavClick}>
                Kapatılan Kurumlar
              </Nav.Link>
              <Nav.Link as={Link} to="/teror-sucu-istatistikleri" className={currentPath === "/teror-sucu-istatistikleri" ? "active" : ""} onClick={handleNavClick}>
                Terör Suçu İstatistikleri
              </Nav.Link>
              <Nav.Link as={Link} to="/yargi-bagimsizligi" className={currentPath === "/yargi-bagimsizligi" ? "active" : ""} onClick={handleNavClick}>
                Yargı Bağımsızlığı
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default SideBar;
