import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from 'react-countup';
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
  
    <Container fluid className=" d-flex justify-content-center align-items-center ilk-giris">
    <Row className="justify-content-center align-items-center">
      <Col lg={6} className="text-start">
      <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
      Yaşam Hakkı İhlalleri
          </h1>
        <p className="small-paragraph text-white">
          2016’da yaşanan sözde darbe girişimi sonrasında yoğun baskı ve takibat
          altında kalan Gülen Hareketi mensupları Türkiye’deki siyasi ve toplumsal
          değişimlerin odak noktası oldular. Ulusal ve uluslararası güvenceler
          altına alınmış bütün insan hakları ihlal edilen Gülen Hareketi
          mensuplarının yaşama hakları da doğrudan veya dolaylı yollarla 2016
          Temmuzdan sonra ihlal edildi. “Hain” iftirasıyla sosyal ve ekonomik
          soykırımın pençesine düşen Gülen Hareketi mensupları erkek, kadın, çocuk
          ayrımı olmaksızın hayattan koparıldı. Gülen hareketi mensuplarına
          yönelik itibar suikastı ile başlayan süreç, hareket mensuplarının
          toplumsal anlamda cüzzamlı muamelesi görmesiyle devam ederken evrildiği
          noktada toplum nezdinde “insan” sıfatından uzaklaştırıldı.
        </p>
        <p className="small-paragraph text-white">
          Bunun sonucu olarak ise hareket mensuplarının, eşlerinin ve çocuklarının
          canına kıymet verilmemesi algısı Türkiye toplumuna yerleşti. 2016’daki
          sözde “darbe” girişiminden bugüne kadar Gülen Hareketi ile bağlantılı
          olmakla suçlanan en az {" "} {a5Value} kişi doğrudan
          veya dolaylı sebeplerle hayatını kaybetti. Hayatını kaybedenlerden en az
          65’i henüz sadece çocuktu.
        </p>
      </Col>
      <Col lg={6} className="d-flex flex-column justify-content-center align-items-center desktop-margin-top">
        <h2 className="text-white" style={{ fontSize: '6.2rem' }}>
          <CountUp start={700} end={a5Value} duration={5} />
        </h2>
        <h6 className="text-white" style={{ fontSize: '1.4rem' }}>Toplam Ölen Kişi Sayısı</h6>
      </Col>
    </Row>
  </Container>

  );
};

export default OlumlerGiris;
