import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-teror.png";
import Spacer from "../components/spacer/Spacer";
import TerorDataGiris from "../components/paragraflar/teror-data/teror-data-giris";
import TypewriterText from "../components/paragraflar/teror-data/type-writer-text";
import AccordionTextTerorData from "../components/paragraflar/teror-data/accordion-text-teror-data";
import ToplamKararSayisi from "../components/charts/teror-data/toplam-karar-sayisi";
import KamuDavasi from "../components/charts/teror-data/kamu-davasi";
import Kovusturma from "../components/charts/teror-data/kovusturma";
import SorusturmaKisiSayisiAciklama from "../components/paragraflar/teror-data/sorusturma-kisi-sayisi-aciklama";
import KanunKararSayisi from "../components/charts/teror-data/kanun-karar-sayisi";
import KanunKamuDavasiSayisi from "../components/charts/teror-data/kanun-kamu-davasi-sayisi";
import KanunKovusturmaSayisi from "../components/charts/teror-data/kanun-kovusturma-sayisi";
import TckTable from "../components/charts/teror-data/tck-table";
import TckAciklama from "../components/paragraflar/teror-data/tck-aciklama";
import YillarKovusturmaGrafik from "../components/charts/teror-data/yillara-gore-kovusturma";
import GenelKovusturma from "../components/charts/teror-data/genel-kovusturma";
import PastaGenekKovusturma from "../components/charts/teror-data/pasta-genel-kovusturma";
import KovusturmaGenel from "../components/charts/teror-data/kovusturma-genel";
import KovusturmaKadinlar from "../components/charts/teror-data/kovusturma-kadınlar";
import KovusturmaErkekler from "../components/charts/teror-data/kovusturma-erkekler";
import PastaKovusturmaCinsiyet from "../components/charts/teror-data/pasta-kovusturma-cinsiyet";


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

  const headingStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    padding: '1rem 0',
    borderBottom: '2px solid #ddd',
    marginBottom: '2rem',
  };

  return (
    <>
      <div style={divStyle}>
        <div style={overlayStyle}></div>
        <Container style={contentContainerStyle}>
          <TerorDataGiris />
        </Container>
      </div>

      <Container style={contentContainerStyle}>
        <TypewriterText />
        <AccordionTextTerorData />
        <Row>
          <h2 style={headingStyle}>Soruşturmalar</h2>
          <Col lg={4}>
            <ToplamKararSayisi />
          </Col>
          <Col lg={4}>
            <KamuDavasi />
          </Col>
          <Col lg={4}>
            <Kovusturma />
          </Col>
          <SorusturmaKisiSayisiAciklama />
        </Row>
        <Spacer />
        <Row>
          <Col lg={4}>
            <KanunKararSayisi />
          </Col>
          <Col lg={4}>
            <KanunKamuDavasiSayisi />
          </Col>
          <Col lg={4}>
            <KanunKovusturmaSayisi />
          </Col>
          <h4 className="mt-5">Açıklama Gelecek</h4>
        </Row>
        <Spacer />
        <Row>
          <Col lg={5}>
            <TckTable />
          </Col>
          <Col lg={7}>
            <TckAciklama />
          </Col>
        </Row>
        <Spacer />
        <h2 style={headingStyle}>Kovuşturmalar</h2>
        <YillarKovusturmaGrafik />
        <Spacer />

        <Row>
          <Col lg={4}>
            <KanunKararSayisi />
          </Col>
          <Col lg={4}>
            <KanunKamuDavasiSayisi />
          </Col>
          <Col lg={4}>
            <KanunKovusturmaSayisi />
          </Col>
          <h4 className="mt-5">Açıklama Gelecek</h4>
        </Row>
        <Spacer />

        <Row>
          <Col lg={5}>
            <GenelKovusturma />
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
          <PastaGenekKovusturma/>
          </Col>
        </Row>
        <Spacer />

<Row>
  <Col lg={6}>
  <KovusturmaGenel/>
  </Col>
  <Col lg={6}>
  <PastaKovusturmaCinsiyet/>
  </Col>
  <Spacer/>
  <Col lg={6}>
  <KovusturmaKadinlar/>
   
  </Col>
  <Col lg={6}>
   <KovusturmaErkekler/>
   </Col>
 
</Row>
<Spacer />



      </Container>
    </>
  );
};

export default TerorDataPage;
