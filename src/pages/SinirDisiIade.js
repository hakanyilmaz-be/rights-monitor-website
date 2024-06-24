import {Container} from "react-bootstrap";
import backgroundImg from "../assets/img/bg-sinirdisi.png"
import SinirDisiGiris from "../components/paragraflar/sinirdisi/sinirdisi-giris";
import KacirmaAciklama from "../components/paragraflar/sinirdisi/kacirma";
import MapSinirDisi from "../components/locker-studio/map-sinir-disi";
import IadeTalepleri from "../components/paragraflar/sinirdisi/iade-talepleri";
import InterpolAciklama from "../components/paragraflar/sinirdisi/interpol-aciklama";
import AccordionTextIade from "../components/paragraflar/sinirdisi/accordion-text-iade";
import AdvancedTableSinirDisi from "../components/charts/sinirdisi/advanced-table-sinir-disi";


const SinirDisiIade = () => {
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
    backgroundColor: 'rgba(255, 255, 255, 0.101)',
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
         
         <SinirDisiGiris/>
        </Container>
      </div>

      <Container style={{padding:'4.2rem'}}>

      <MapSinirDisi/>

<div style={{ height: "50px" }}></div>
      <KacirmaAciklama/>
      
      <div style={{ height: "50px" }}></div>

      <IadeTalepleri/>     

      <div style={{ height: "50px" }}></div>

      <InterpolAciklama/>

      <div style={{ height: "50px" }}></div>

    <AccordionTextIade/>
    <AdvancedTableSinirDisi/>
    </Container>

    </>
  );
};

export default SinirDisiIade;
