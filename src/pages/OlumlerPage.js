import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-olumler4.png"
import OlumlerGiris from "../components/paragraflar/olumler/olumler-giris";
import Cinsiyet from "../components/charts/olumler/cinsiyet";
import CinsiyetAciklama from "../components/paragraflar/olumler/cinsiyet-aciklama";
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
import Spacer from "../components/spacer/Spacer";


const OlumlerPage = () => {
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
    paddingTop: '3.2rem',
    paddingBottom: '1.2rem',
    paddingLeft: '2.2rem',
    paddingRight: '2.2rem',
  };

  return (
    <>
      <div style={divStyle}>
        <div style={overlayStyle}></div>  
        <Container style={contentContainerStyle}>
        
         <OlumlerGiris/>
        </Container>
      </div>

      <Container style={contentContainerStyle}>

      <Row>
        <Col lg={5}>
         <Cinsiyet/>
        </Col>
        <Col lg={7} className="pl-3">
          <CinsiyetAciklama/>
        </Col>
      </Row>
      <Spacer/>


      <Row>
        <Col lg={6}>
        <MeslekAciklama/>
        </Col>
        <Col lg={6}>
       <Meslek/>
        </Col>
      </Row>
      <Spacer/>


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
      <Spacer/>


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

export default OlumlerPage;
