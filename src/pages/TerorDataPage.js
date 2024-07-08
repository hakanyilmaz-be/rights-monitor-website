import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-teror.png"
import IhracHukukiAciklama from "../components/paragraflar/ihraclar/ihrac-hukuki-aciklama";
import IhracMeslek from "../components/charts/ihraclar/ihrac-meslek";
import IhracKurumlar from "../components/charts/ihraclar/ihrac-kurumlar";
import IhraclarNeden from "../components/paragraflar/ihraclar/ihraclar-neden";
import IhraclarNedenDevami from "../components/paragraflar/ihraclar/ihraclar-neden-devami";
import IhracDatalar from "../components/locker-studio/ihrac-datalar";
import IhraclarSosyal from "../components/paragraflar/ihraclar/ihraclar-sosyal";
import AdvancedTableCezaevi from "../components/charts/cezaevi/advanced-table-cezaevi";
import AccordionTextCezaevi from "../components/paragraflar/cezaevi/accordion-text-cezaevi";
import Spacer from "../components/spacer/Spacer";
import TerorDataGiris from "../components/paragraflar/teror-data/teror-data-giris";
import TypewriterText from "../components/paragraflar/teror-data/type-writer-text";
import AccordionTextTerorData from "../components/paragraflar/teror-data/accordion-text-teror-data";
import ToplamKararSayisi from "../components/charts/teror-data/toplam-karar-sayisi";
import KamuDavasi from "../components/charts/teror-data/kamu-davasi";
import Kovusturma from "../components/charts/teror-data/kovusturma";
import SorusturmaKisiSayisiAciklama from "../components/paragraflar/teror-data/sorusturma-kisi-sayisi-aciklama";


const TerorDataPage = () => {
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
       
      
       <TerorDataGiris/>

        </Container>
      </div>

      <Container style={contentContainerStyle}>

        <TypewriterText/>

        <AccordionTextTerorData/>

      <Row>
        <Col lg={4}>
     <ToplamKararSayisi/>
        </Col>
        <Col lg={4}>
        <KamuDavasi/>
        </Col>
        <Col lg={4}>
        <Kovusturma/>
        </Col>
        <SorusturmaKisiSayisiAciklama/>
      </Row>
      <Spacer/>

      <Row>
        <Col lg={6}>
       <IhracHukukiAciklama/>
        </Col>
        <Col lg={6}>
      <IhracMeslek/>
        </Col>
      </Row>
      <Spacer/>

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
      <Spacer/>

      <Row>
        <Col lg={5}>
      <IhraclarSosyal/>
        </Col>
        <Col lg={7} style={{ marginTop: '2rem' }}>
      <IhracDatalar/>
        </Col>
      </Row>

    
     <AccordionTextCezaevi/>

     <Spacer/>

   <AdvancedTableCezaevi/>
 

    </Container>

    </>
  );
};

export default TerorDataPage;









