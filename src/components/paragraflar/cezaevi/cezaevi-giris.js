import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";


const CezaeviGiris = () => {
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][0]);
          }
          if (data.length > 0) {
            setA6Value(data[1][0]);
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
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white mt-5">Cezaevindeki Hak İhlalleri</h1>

        <h2 className="text-white"> </h2>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            Uluslararası insan hakları sözleşmeleri dahilinde, hapis cezasının
            infazı sırasında, hürriyetinden mahrum bırakılan hükümlünün insan
            onuruna saygı gösterilmelidir ve bu kişilerin barındırıldığı
            koşullar, asgari yaşam gereklerine uygun olmalıdır. Mahpuslar,
            cezanın gerektirdiği zorunlu sıkıntının ötesinde, aşırı ıstırap ve
            zorluklara maruz bırakılmamalıdır. OHAL döneminde, “tehlikeli
            faillerden” toplumu koruma iddiasıyla, asılsız suçlamalarla karşı
            karşıya kalan mahpuslar sıkı güvenlik önlemleri altında tecrit
            edilerek insanlık dışı muamelelerle karşılaştılar. Gözlem Kurulu
            Raporu ile bu mahpuslar, toplum açısından keyfi olarak tehlikeli
            kategorisinde değerlendirildiler. Bunun sonucunda ise düşman ceza
            hukukunun bir yansıması olarak yalnızca tecrit edilmekle kalmayıp
            aynı zamanda etkisiz hale getirilerek toplumdan dışlandılar.
          </p>
          <p className="small-paragraph text-white">
            Cezaevlerinde yaşanan sorunlar ve mahkumların yaşadıkları hak
            ihlalleri, iktidarın siyasi tercihlerinin sonucudur. Açıktır ki
            iktidar, kadınlara, çocuklara ve toplumun her kesimine dayattığı
            baskıcı ve antidemokratik politikaları cezaevlerinde de sürdürmekte,
            hak ihlallerinin önüne geçemediği gibi ihlallerin ve mağduriyetlerin
            yaşanmasına sebebiyet vermektedir.
          </p>

          <motion.h5
            className="fw-bold text-white motion-font"
           
            animate={{ opacity: [0.1, 1, 0.1] }}
            transition={{ duration: 9, repeat: Infinity }}
          >
            15 Temmuz’dan bugüne cezaevlerinde siyasi mahpuslara yönelik 30
            farklı kategoride {a5Value} cezaevinde en az {a6Value} hak
            ihlalinin yaşandığı bilinmektedir.
          </motion.h5>
        </Col>
      </Row>
    </Container>
  );
};

export default CezaeviGiris;
