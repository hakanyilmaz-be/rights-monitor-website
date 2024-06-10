import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-sosyal.png"
import CinsiyetIhraclar from "../components/charts/ihraclar/cinsiyet-ihraclar";
import IhracIhbarAciklama from "../components/paragraflar/ihraclar/ihrac-ihbar-aciklama";
import IhracHukukiAciklama from "../components/paragraflar/ihraclar/ihrac-hukuki-aciklama";
import IhracMeslek from "../components/charts/ihraclar/ihrac-meslek";
import IhracKurumlar from "../components/charts/ihraclar/ihrac-kurumlar";
import IhraclarNeden from "../components/paragraflar/ihraclar/ihraclar-neden";
import IhraclarNedenDevami from "../components/paragraflar/ihraclar/ihraclar-neden-devami";
import IhracDatalar from "../components/locker-studio/ihrac-datalar";
import IhraclarSosyal from "../components/paragraflar/ihraclar/ihraclar-sosyal";
import CezaeviGiris from "../components/paragraflar/cezaevi/cezaevi-giris";
import AdvancedTableCezaevi from "../components/charts/cezaevi/advanced-table-cezaevi";
import AccordionTextCezaevi from "../components/paragraflar/cezaevi/accordion-text-cezaevi";


const SosyalEkonomikPage = () => {
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
        <h1 style={{color: "white"}}>Sosyal ve Ekonomik Hak İhlalleri!!!</h1>
        <CezaeviGiris/>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

      <Row>
        <Col lg={5}>
      <CinsiyetIhraclar/>
        </Col>
        <Col lg={7} className="pl-3">
        <IhracIhbarAciklama/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
       <IhracHukukiAciklama/>
        </Col>
        <Col lg={6}>
      <IhracMeslek/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6} >
         <IhracKurumlar/>
        </Col>
        <Col lg={6}>
        <IhraclarNeden/>
        </Col>
        <Col lg={12}>
      <IhraclarNedenDevami/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={5}>
      <IhraclarSosyal/>
        </Col>
        <Col lg={7} style={{ marginTop: '2rem' }}>
      <IhracDatalar/>
        </Col>
      </Row>

    
     <AccordionTextCezaevi/>

   <div style={{ height: "50px" }}></div>

   <AdvancedTableCezaevi/>
 

    </Container>

    </>
  );
};

export default SosyalEkonomikPage;






