import { Container } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-olumler4.png"
import KaybetmelerGiris from "../components/paragraflar/kaybetmeler/kaybetmeler-giris";
import KaybetmelerAciklama from "../components/paragraflar/kaybetmeler/kaybetmeler-aciklama";
import AccordionTextKaybetmeler from "../components/paragraflar/kaybetmeler/accordion-text-kaybetmeler";
import AdvancedTableKaybetmeler from "../components/charts/kaybetmeler/advanced-table-kaybetmeler";



const KaybedilenlerPage = () => {
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
    backgroundColor: 'rgba(255, 255, 255, 0.349)',
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
         
        <KaybetmelerGiris/>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

      <KaybetmelerAciklama/>

      <div style={{ height: "50px" }}></div>

      <div style={{ height: "30px" }}></div>
  <AccordionTextKaybetmeler/>
   <AdvancedTableKaybetmeler/>
    </Container>

    </>
  );
};

export default KaybedilenlerPage;
