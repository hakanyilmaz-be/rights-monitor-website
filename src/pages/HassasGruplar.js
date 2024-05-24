import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-hassas.png"
import HassasGiris from "../components/paragraflar/hassas/hassas-giris";
import KadinlarGrafik from "../components/charts/hassas/kadinlar-grafik";
import KadinlarAciklama from "../components/paragraflar/hassas/kadinlar-aciklama";
import KadinlarDevam from "../components/paragraflar/hassas/kadinlar-devami";
import AccordionHassas from "../components/paragraflar/hassas/accordion-hassas";
import AdvancedTableHassas from "../components/charts/hassas/advanced-table-hassas";
import videoHassasGruplar from "../assets/video/hassas-gruplar.mp4"
import GenelAciklamaHassas from "../components/paragraflar/hassas/genel-aciklama-hassas";
import GenelAciklamaHassasDevami from "../components/paragraflar/hassas/genel-aciklama-hassa-devami";



const HassasGruplarPage = () => {
  const divStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 2,  
    padding: '4.2rem',
  };

  return (
    <>
      <div style={divStyle}>
        <div style={overlayStyle}></div>  
        <Container style={contentContainerStyle}>
        <HassasGiris/>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

      <Row>
        <Col lg={5}>
        <KadinlarGrafik/>
        </Col>
        <Col lg={7} className="pl-3">
         <KadinlarAciklama/>
        </Col>
        <Col lg={12}>
       <KadinlarDevam/>

        </Col>
        <div style={{ height: "30px" }}></div>

      <GenelAciklamaHassas/>

      </Row>
      <div style={{ height: "10px" }}></div>

      <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
      <video 
        src={videoHassasGruplar} 
        style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }} 
        autoPlay 
        loop 
        muted 
        controls
      />
    </div>
    <div style={{ height: "10px" }}></div>
      <GenelAciklamaHassasDevami/>
   
   
      <div style={{ height: "30px" }}></div>

     <AccordionHassas/>
    <AdvancedTableHassas/>
    </Container>

    </>
  );
};

export default HassasGruplarPage;
