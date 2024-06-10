import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";


const KaybetmelerGiris = () => {
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");
  const [a7Value, setA7Value] = useState("");

  const gradientTextStyle = {
    
    background: "linear-gradient(270deg, #ffe985, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSmvOl769rwKcc4YZn5O_UzYEapzgjUe5QG1bDyJDy2QxooD70jm7BXOgoyj3DJwDWfnorpMqT3c6gf/pub?gid=276250322&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][4]);
          }
          if (data.length > 0) {
            setA6Value(data[1][4]);
          }
          if (data.length > 0) {
            setA7Value(data[2][4]);
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1); // Başlık satırını atla
  }

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            Zorla kaybedilme vakalari (enforced disappearance) , Türkiye’nin
            tarihinde yeni bir olgu değildir. 1980 askeri darbesinin ardından
            1,300’den fazla kişi kaybolmuş, 1990'larda ise özellikle Kürtler ve
            solcu siyasi aktivistler hedef alınmıştı. Bu kayıpların çoğunun
            devlet ajanları veya gizli gruplar tarafından gerçekleştirildigine
            inanilmaktadir ve mağdurların akıbetleri hala belirsizdir. Bu
            bağlamda, Cumartesi Anneleri hareketi, kayıp yakınlarının adalet
            arayışında önemli bir sembol haline gelmistir. Cumartesi Anneleri,
            27 Mayıs 1995’ten bu yana her cumartesi günü 90'lı yıllarda
            gözaltında kaybedilen yakınlarının akıbetini sormak ve faillerin
            yargılanmasını talep etmek amacı ile Galatasaray Meydanı'nda
            buluşarak eylem yapmaktadırlar.
          </p>
          <p className="small-paragraph text-white">
            Zorla kaybetmeler, demokratik değerlerden uzak devletlerin muhalif
            grupları bastırmak amacıyla uyguladığı bir şiddet yöntemidir.
            Uluslararası insan hakları hukukuna göre, bir kişi kayıp ise
            işkenceye maruz kalmış veya öldürülmüş olma ihtimali yüksektir. 15
            Temmuz öncesi Türkiye tarihinde zorla kaybetme uygulamaları
            Cumhuriyet'in ilk yıllarına kadar uzanırken, bu suçun yaygın ve
            sistematik olarak işlendiği dönemler 12 Eylül 1980 darbesi ve
            1990'lardaki olağanüstü hal dönemleridir.
          </p>
          <p className="small-paragraph text-white">
            1990'lar boyunca veya 2000'lerin başlarında zorla kaybetmelere
            karışan resmi görevlilerin neredeyse hiçbiri yargılanıp ceza
            almamıştır. Kayıp yakınları yetkili makamlara başvuruda bulunurken
            çoğunlukla etkisiz cevaplar almis ve savcılar tarafından tehdit
            edilmislerdir. Bu dönemde Avrupa İnsan Hakları Mahkemesi (AİHM),
            zorla kaybetmelerle ilgili birçok davada Türkiye'yi sorumlu
            bulmustur.
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center"
          style={{ marginTop: "-9rem", paddingLeft: "8rem" }}
        >
          <h2 style={{ ...gradientTextStyle, fontSize: "2.4rem" }}>
          
          Hâlâ Kayıp...
            
          </h2>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a5Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>gündür</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
            
                Sunay Elmas
        
            </h6>
          </div>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a6Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>gündür</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
           
            Ayhan Oran
           
             
            </h6>
          </div>
          <div>
            <h2
              className="text-white"
              style={{ fontSize: "2.2rem", paddingTop: "2.5rem" }}
            >
              <CountUp start={700} end={a7Value} duration={5} />{" "}
              <span style={{ fontSize: "1.2rem" }}>gündür</span>
            </h2>
            <h6 style={{ ...gradientTextStyle, fontSize: "1.4rem" }}>
           
            Yusuf Bilge Tunç
            
              
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KaybetmelerGiris;
