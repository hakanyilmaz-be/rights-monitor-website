import { Col, Container, Row } from "react-bootstrap";
import HeaderKitlesel from "../components/text-header/headerKitlesel";
import FlourishEmbedKitlesel from "../components/flourish/FlourishEmbedKitlesel";
import KitleselGiris from "../components/paragraflar/kitlesel/kitlesel-giris";
import KitleselIller from "../components/charts/kitlesel/kitlesel-iller";
import IllerAciklama from "../components/paragraflar/kitlesel/iller-aciklama";
import YillarAciklama from "../components/paragraflar/kitlesel/yillar-aciklama";
import KitleselYillarGrafik from "../components/charts/kitlesel/kitlesel-yillar";
import LookerStudioIframeKitlesel from "../components/locker-studio/locker-studio-iframe-kitlesel";
import Sorumlular from "../components/paragraflar/kitlesel/sorumlular";
import SorumlularDevam from "../components/paragraflar/kitlesel/sorumlular-devami";
import AccordionText from "../components/paragraflar/kitlesel/accordion-text";
import AdvancedTable from "../components/charts/kitlesel/advanced-table";
import backgroundImg from "../assets/img/bg-olumler2.png"


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
    backgroundColor: 'rgba(255, 255, 255, 0.103)',
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
          <HeaderKitlesel />
        
          <div style={{ height: "30px" }}></div>
          <Row>
        <Col lg={6}>
         <YillarAciklama/>
        </Col>
        <Col lg={6} className="pl-3">
      
        </Col>
      </Row>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

      <Row>
        <Col lg={5}>
          <KitleselIller />
        </Col>
        <Col lg={7} className="pl-3">
          <IllerAciklama />
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
         <YillarAciklama/>
        </Col>
        <Col lg={6} className="pl-3">
        <KitleselYillarGrafik/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={5}>
         <LookerStudioIframeKitlesel/>
        </Col>
        <Col lg={7} className="p-3">
        <Sorumlular/>
        </Col>
        <Col lg={12} className="pt-3">
        <SorumlularDevam/>
        </Col>
      </Row>

      <div style={{ height: "30px" }}></div>
      <AccordionText/>
    <AdvancedTable/>
    </Container>

    </>
  );
};

export default OlumlerPage;
