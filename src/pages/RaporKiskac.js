import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/kiskac-bg.png"
import Spacer from "../components/spacer/Spacer";
import KiskacGiris from "../components/paragraflar/rapor-kiskac/kiskac-giris";
import KiskacKitlesel from "../components/paragraflar/rapor-kiskac/kıskac-kitlesel";
import KitleselYillarGrafik from "../components/charts/kitlesel/kitlesel-yillar";
import KiskacOpr from "../components/paragraflar/rapor-kiskac/kıskac-opr";
import KiskacBakan from "../components/paragraflar/rapor-kiskac/kiskac-bakan";
import KiskacAtiflar from "../components/paragraflar/rapor-kiskac/kıskac-atiflar";


const RaporKiskac = () => {
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
          <KiskacGiris/>
        </Container>
      </div>

      <Container style={contentContainerStyle}>
         <Row style={{marginTop: "-2rem"}}>
          <Col lg={6} className="mt-5">
            <KiskacKitlesel/>
          </Col>
          <Col lg={6} className="pl-3">
            <KitleselYillarGrafik/>
          </Col>
        </Row>
        <Spacer/>

        <Row>
          <Col lg={12}>
            <KiskacOpr/>
          </Col>
        </Row>
  
        <Row>
          <Col lg={12}>
            <KiskacBakan/>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
           <KiskacAtiflar/>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default RaporKiskac;
