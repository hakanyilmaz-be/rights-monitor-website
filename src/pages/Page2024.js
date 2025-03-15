import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-2024.png"
import Spacer from "../components/spacer/Spacer";
import PageGiris2024 from "../components/paragraflar/2024/page-giris-2024";
import P2024KitleselAciklama from "../components/paragraflar/2024/p2024-aciklama-kitlesel";
import P2024HassasAciklama from "../components/paragraflar/2024/p2024-aciklama-hassas";
import P2024MalvarligiAciklama from "../components/paragraflar/2024/p2024-aciklama-malvarligi";
import P2024YasamAciklama from "../components/paragraflar/2024/p2024-aciklama-yasam";
import P2024ZorlaKaybedilmeAciklama from "../components/paragraflar/2024/p2024-aciklama-zorla-kaybedilme";
import P2024TerIstatistikAciklama from "../components/paragraflar/2024/p2024-aciklama-ter-istatistik";
import P2024CezaeviAciklama from "../components/paragraflar/2024/p2024-aciklama-cezaevi";
import P2024YargiAciklama from "../components/paragraflar/2024/p2024-aciklama-yargi";
import P2024SonucAciklama from "../components/paragraflar/2024/p2024-aciklama-sonuc";

 
const Page2024 = () => {
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
          <PageGiris2024 />
        </Container>
      </div>

      <Container style={contentContainerStyle}>
        <Row>
          <Col lg={12}>
            <P2024KitleselAciklama />
          </Col>
        </Row>
        <Spacer />

        <Row>
          <Col lg={12}>
            <P2024HassasAciklama/>
          </Col>
        </Row>
    

        <Row>
          <Col lg={12}>
            <P2024MalvarligiAciklama/>
          </Col>
        </Row>
        
    

        <Row>
          <Col lg={12}>
            <P2024YasamAciklama/>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <P2024ZorlaKaybedilmeAciklama/>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <P2024TerIstatistikAciklama/>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <P2024CezaeviAciklama/>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <P2024YargiAciklama/>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <P2024SonucAciklama/>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Page2024;
