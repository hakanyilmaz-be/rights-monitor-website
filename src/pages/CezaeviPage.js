import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-cezaevi.png"
import CezaeviGiris from "../components/paragraflar/cezaevi/cezaevi-giris";
import AdvancedTableCezaevi from "../components/charts/cezaevi/advanced-table-cezaevi";
import AccordionTextCezaevi from "../components/paragraflar/cezaevi/accordion-text-cezaevi";
import IhlalTuru from "../components/charts/cezaevi/ihlal-turu";
import IhlalTuruText from "../components/paragraflar/cezaevi/ihlal-turu-text";
import HakIhlali from "../components/paragraflar/cezaevi/hak-ihlali";
import Spacer from "../components/spacer/Spacer";


const CezaeviPage = () => {
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
      
        <CezaeviGiris/>
        </Container>
      </div>

      <Container style={contentContainerStyle}>
      <Row>
        <Col lg={6} >
        <IhlalTuru/>
        </Col>
        <Col lg={6}>
       <IhlalTuruText/>
        </Col>
        <Col lg={12}>
      <HakIhlali/>
        </Col>
      </Row>
    <Spacer/>

     
 
    
     <AccordionTextCezaevi/>

     <Spacer/>


   <AdvancedTableCezaevi/>
 

    </Container>

    </>
  );
};

export default CezaeviPage;


