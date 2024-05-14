import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-hassas.png"
import MeslekAciklama from "../components/paragraflar/olumler/meslek-aciklama";
import Meslek from "../components/charts/olumler/meslek";
import Yillar from "../components/paragraflar/olumler/yillar";
import YillarDevam from "../components/paragraflar/olumler/yillar-devami";
import YillarGrafik from "../components/charts/olumler/yillar-grafik";
import HassasGiris from "../components/paragraflar/hassas/hassas-giris";
import KadinlarGrafik from "../components/charts/hassas/kadinlar-grafik";
import KadinlarAciklama from "../components/paragraflar/hassas/kadinlar-aciklama";
import KadinlarDevam from "../components/paragraflar/hassas/kadinlar-devami";
import AccordionHassas from "../components/paragraflar/hassas/accordion-hassas";
import AdvancedTableHassas from "../components/charts/hassas/advanced-table-hassas";


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
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
        <MeslekAciklama/>
        </Col>
        <Col lg={6}>
       <Meslek/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6} style={{ marginLeft: '-2rem' }}>
         <YillarGrafik/>
        </Col>
        <Col lg={6}>
        <Yillar/>
        </Col>
        <Col lg={12}>
       <YillarDevam/>
        </Col>
      </Row>
      <div style={{ height: "30px" }}></div>

     <AccordionHassas/>
    <AdvancedTableHassas/>
    </Container>

    </>
  );
};

export default HassasGruplarPage;
