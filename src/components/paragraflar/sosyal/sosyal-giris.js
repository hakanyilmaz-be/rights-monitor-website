import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./sosyal-text.css"

const SosyalGiris = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white mt-5 sosyal-baslik" >Sosyal ve Ekonomik Hak İhlalleri ve Mağduriyetler</h1>

        <h2 className="text-white"> </h2>
        <div style={{ height: "20px" }}></div>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            2016'da Türkiye'de olağanüstü hal (OHAL) ilan
            edilmesiyle birlikte çıkarılan Kanun Hükmünde Kararnameler (KHK)
            çerçevesinde yaklaşık 125 bin kamu çalışanının, idari ve adli işleme
            tabi tutulmadan görevlerine son verildi. Bu süreçte, KHK'lıların
            karşılaştığı sosyal ve ekonomik hak ihlalleri, insan hakları
            gözlemcileri tarafından "sosyal ölüm" olarak tanımlandı.
          </p>
        </Col>
        <Col lg={6} className="text-start intro">
          <div className="info-box-container">
            <div className="info-box box1">
              <p className="title">Olay Sayısı</p>
              <p className="count">58</p>
            </div>
            <div className="info-box box2">
              <p className="description">
                KHK'lılar en az 58 farklı olay türünde sosyal ve ekonomik hak ihlali yaşamaktadırlar.
              </p>
            </div>
          </div>
          <div className="info-box-container mt-3">
            <div className="info-box box1">
              <p className="title">Kurum Sayısı</p>
              <p className="count">30</p>
            </div>
            <div className="info-box box2">
              <p className="description">
              Söz konusu ihlallerden en az 30 farklı kurum ve kuruluş sorumludur.
              </p> 
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SosyalGiris;
