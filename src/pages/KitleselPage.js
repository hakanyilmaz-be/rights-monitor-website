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
import backgroundImg from "../assets/img/background-kitlesel-6.png";
import './kitlesel-page.css';  
import Spacer from "../components/spacer/Spacer";

const KitleselPage = () => {
  const divStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0, 
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.169)',
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
          <HeaderKitlesel />
        </Container>
        <Container fluid style={contentContainerStyle}>
          <FlourishEmbedKitlesel />
        </Container>
        <Container style={contentContainerStyle}>
          <KitleselGiris />
        </Container>
      </div>

      <Container style={contentContainerStyle}>
        <Row>
          <Col lg={5} className="mb-col-space">
            <KitleselIller />
          </Col>
         
          <Col lg={7} className="pl-3">
            <IllerAciklama />
          </Col>
        </Row>
        <Spacer/>

        <Row>
          <Col lg={6}>
            <YillarAciklama/>
          </Col>
          <Col lg={6} className="pl-3">
            <KitleselYillarGrafik/>
          </Col>
        </Row>
        <Spacer/>


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

export default KitleselPage;
