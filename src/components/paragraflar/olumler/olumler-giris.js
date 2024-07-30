import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./olumler-text.css";

const OlumlerGiris = () => {
  const [a5Value, setA5Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSV35Idlyu1RM7zTM_yzTSoY1VhSYonODYO4tLiKgDOKVZwKG4arjET1jcDrwd8S0cS2_TbjwiaAnSh/pub?gid=558426225&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][3]);
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
    return rows.slice(1);
  }

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
            Yaşam Hakkı İhlalleri
          </h1>
          <p className="small-paragraph text-white">
            15 Temmuz 2016 sonrasında Gülen Hareketi mensupları yoğun baskı ve
            takibat altında kalmış, Türkiye’deki siyasi ve toplumsal
            değişimlerin odak noktası olmuşlardır. Bu süreçte Gülen Hareketi
            mensupları sosyal ve ekonomik ayrımcılığa maruz kalmış, erkek, kadın
            ve çocuk ayrımı olmaksızın çeşitli hak ihlalleri ile
            karşılaşmışlardır. Ulusal ve uluslararası güvenceler altına alınmış
            insan hakları ihlal edilen Gülen Hareketi mensuplarının yaşama
            hakları da 2016 Temmuz'dan sonra doğrudan veya dolaylı yollarla
            ihlal edilmiştir.
          </p>
          <p className="small-paragraph text-white">
            Gülen Hareketi mensuplarına yönelik toplumsal algı, bu kişilerin ve
            ailelerinin can güvenliğine değer verilmemesi yönünde değişmiştir.
            2016’dan bugüne kadar Gülen Hareketi ile bağlantılı olmakla suçlanan
            en az {a5Value} kişi hayatını kaybetmiştir. Hayatını kaybedenlerden en az 65'i çocuktur.
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
        >
          <h2 className="text-white" style={{ fontSize: "6.2rem" }}>
            <CountUp start={700} end={a5Value} duration={5} />
          </h2>
          <h6 className="text-white" style={{ fontSize: "1.4rem" }}>
            Toplam Ölen Kişi Sayısı
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default OlumlerGiris;
