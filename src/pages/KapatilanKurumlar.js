import {Col, Container, Row} from "react-bootstrap";
import backgroundImg from "../assets/img/bg-sinirdisi.png"
import KapatilanKurumlarGiris from "../components/paragraflar/kapatilankurumlar/kapatilan-kurumlar-giris";
import MapKapatilan from "../components/locker-studio/map-kapatilan";
import TarihselAciklama from "../components/paragraflar/kapatilankurumlar/tarihsel-aciklama";
import SorumlularAciklama from "../components/paragraflar/kapatilankurumlar/sorumlular-aciklama";
import SorumularDevam from "../components/paragraflar/kapatilankurumlar/sorumlular-devami";
import KapatilanSorumlular from "../components/locker-studio/kapatilan-sorumlular";
import KurumlarAciklama from "../components/paragraflar/kapatilankurumlar/kurumlar-aciklama";
import KurumlarGrafik from "../components/charts/kapatilan/kurumlar-grafik";
import AccordionTextKapatilanKurumlar from "../components/paragraflar/kapatilankurumlar/accordion-text-kapatilan-kurumlar";
import AdvancedTableKapatilanKurumlar from "../components/charts/kapatilan/advanced-table-kapatilan-kurumlar";


const KapatilanKurumlar = () => {
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
    backgroundColor: 'rgba(255, 255, 255, 0.591)',
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
         <h1 className="text-white fw-bold" style={{ fontSize: '3rem' }}>Kapatılan ve El Konulan Kurumlar</h1>
          <div style={{ height: "30px" }}></div>
         <KapatilanKurumlarGiris/>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

     <MapKapatilan/>

<div style={{ height: "50px" }}></div>
     <TarihselAciklama/>
      
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
       <SorumlularAciklama/>
        </Col>
        <Col lg={6} style={{ marginTop: '3rem' }}>
      <KapatilanSorumlular/>
        </Col>
      <div style={{ height: "10px" }}></div>

        <Col lg={12}>
      <SorumularDevam/>
        </Col>
      </Row>  

      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
        <KurumlarAciklama/>
        </Col>
        <Col lg={6}>
        <KurumlarGrafik/>
        </Col>
      </Row>  

      <div style={{ height: "50px" }}></div>

    <AccordionTextKapatilanKurumlar/>
   <AdvancedTableKapatilanKurumlar/>
    </Container>

    </>
  );
};

export default KapatilanKurumlar;
