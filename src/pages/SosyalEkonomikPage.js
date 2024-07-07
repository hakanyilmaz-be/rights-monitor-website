import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-sosyal.png"
import SosyalGiris from "../components/paragraflar/sosyal/sosyal-giris";
import SosyalAciklama from "../components/paragraflar/sosyal/sosyal-aciklama";
import AccordionTextSosyal from "../components/paragraflar/sosyal/accordion-text-sosyal";
import AdvancedTableSosyal from "../components/charts/sosyal/advanced-table-sosyal";


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
      
       <SosyalGiris/>
        </Container>
      </div>

      <Container style={contentContainerStyle}>

      
     

      <Row>
        <Col lg={12}>
       <SosyalAciklama/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      

      

    
     <AccordionTextSosyal/>

   <div style={{ height: "20px" }}></div>

  <AdvancedTableSosyal/>
 

    </Container>

    </>
  );
};

export default SosyalEkonomikPage;






