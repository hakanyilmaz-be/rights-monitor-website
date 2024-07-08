import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const TerorDataGiris = () => {
  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center" style={{paddingLeft: "2rem", paddingRight:"1rem"}}>
        <h2 className="text-white mt-5">Türkiye'de Anti-Terör Yasalarının Suistimali: Hukuki ve İnsan Hakları Boyutları</h2>

        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
          Türkiye'de terörle mücadele yasalarının suistimali, son yıllarda önemli bir endişe kaynağı haline gelmiştir. Özellikle 15 Temmuz 2016 ardından bu yasaların uygulanmasında belirgin bir artış gözlemlenmiştir. Ancak, bu uygulamalar, hukukun üstünlüğü ve insan hakları açısından ciddi sorunlar doğurmuştur.
          </p>
          
        </Col>
      </Row>
   
    </Container>
  );
};

export default TerorDataGiris;
