import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";
import "./header-kitlesel.css";
import axios from 'axios';

const HeaderKitlesel = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [a2Value, setA2Value] = useState('');
  const [b2Value, setB2Value] = useState('');
  const [c2Value, setC2Value] = useState('');
  const [d2Value, setD2Value] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
      axios.get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[0][10]);  
            if (data.length > 1) {
              setB2Value(data[0][9]);  
            }
            if (data.length > 1) {
              setC2Value(data[0][8]); 
            }
            if (data.length > 1) {
              setD2Value(data[0][11]);  
            }
          }
          setIsLoading(false);  // Veri çekme tamamlandı, yükleme durumu false
        })
        .catch(error => {
          console.error('Error fetching CSV data:', error);
          setIsLoading(false);  // Veri çekme başarısız olsa bile yükleme durumunu false yap
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
    return rows.slice(1);  
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;  // Yükleme sırasında gösterilecek içerik
  }

  return (
    <>
      <h1 className="typing-container mb-3">
        <span className="kit">{t("mass")}</span>
        <span className="goz"> {t("detentions")}</span>
      </h1>
      <Row className="mb-5" style={{ visibility: isVisible ? "visible" : "hidden" }}>
        <Col lg={2}></Col>
        <Col lg={10} className="responsive-col" style={{ display: "flex", alignItems: "center" }}>
          <h3 style={{ marginRight: "10px" }}>{t("since_2014")}</h3>
          <div className="type-animation-wrapper">
            <TypeAnimation
              key={`${a2Value}-${b2Value}-${c2Value}-${d2Value}-${i18n.language}`}
              sequence={[
                `${t("total_detentions")}: ${a2Value}`,
                2700, // Waits 2.7s
                `${t("total_operations")}: ${b2Value}`,
                2700, // Waits 2.7s
                `${t("daily_avg_detentions")}: ${c2Value}`,
                2700, // Waits 2.7s
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1.6em",
                fontWeight: 500,
                marginTop: "-6px",
                color: "red",
                display: "inline-block",
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeaderKitlesel;
