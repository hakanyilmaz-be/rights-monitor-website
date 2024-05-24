import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-sinirdisi.png"
import MeslekAciklama from "../components/paragraflar/olumler/meslek-aciklama";
import Meslek from "../components/charts/olumler/meslek";
import Yillar from "../components/paragraflar/olumler/yillar";
import YillarDevam from "../components/paragraflar/olumler/yillar-devami";
import YillarGrafik from "../components/charts/olumler/yillar-grafik";
import SebeplerAciklama from "../components/paragraflar/olumler/sebepler-aciklama";
import SebeplerGrafik from "../components/charts/olumler/sebepler-grafik";
import SebeplerDevam from "../components/paragraflar/olumler/sebepler-devami";
import AccordionTextOlumler from "../components/paragraflar/olumler/accordion-text-olumler";
import AdvancedTableOlumler from "../components/charts/olumler/advanced-table-olumler";
import SinirDisiGiris from "../components/paragraflar/sinirdisi/sinirdisi-giris";
import KacirmaAciklama from "../components/paragraflar/sinirdisi/kacirma";
import MapTest from "../components/locker-studio/map-test";


const SinirDisiIade = () => {
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
    backgroundColor: 'rgba(255, 255, 255, 0.101)',
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
         <h1 className="text-white fw-bold" style={{ fontSize: '3rem' }}>Hukuka Aykırı Sınır Dışı ve İadeler</h1>
          <div style={{ height: "30px" }}></div>
         <SinirDisiGiris/>
        </Container>
      </div>



      <Container style={{padding:'4.2rem'}}>

      <MapTest/>

<div style={{ height: "50px" }}></div>
      <KacirmaAciklama/>
      
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
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
       <SebeplerAciklama/>
        </Col>
        <Col lg={6} style={{ marginTop: '3rem' }}>
       <SebeplerGrafik/>
        </Col>
        <Col lg={12}>
      <SebeplerDevam/>
        </Col>
      </Row>

      <div style={{ height: "30px" }}></div>
     <AccordionTextOlumler/>
    <AdvancedTableOlumler/>
    </Container>

    </>
  );
};

export default SinirDisiIade;
