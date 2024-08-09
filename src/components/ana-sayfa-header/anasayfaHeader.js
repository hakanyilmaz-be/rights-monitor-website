import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import "./anasayfa-header.css";
import axios from 'axios';

const AnasayfaHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [a2Value, setA2Value] = useState('');
  const [b2Value, setB2Value] = useState('');
  const [c2Value, setC2Value] = useState('');
  const [d2Value, setD2Value] = useState(''); 

  useEffect(() => {
      const fetchCSVData = () => {
          const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
          axios.get(csvUrl)
              .then((response) => {
                  const data = parseCSV(response.data);
                  if (data.length > 0) {
                      setA2Value(data[0][10]);  
                      setB2Value(data[0][9]);  
                      setC2Value(data[0][8]); 
                      setD2Value(data[0][11]);  
                      setIsVisible(true); // Veri çekme tamamlandığında yazıyı görünür yap
                  }
              })
              .catch(error => {
                  console.error('Error fetching CSV data:', error);
              });
      };

      fetchCSVData();
  }, []);

  function parseCSV(csvText) {
      const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
      return rows.slice(1);  
  }

  const formatNumber = (number) => {
    return new Intl.NumberFormat('tr-TR').format(number);
  };

  return (
    <Row className="mb-4" style={{ display: isVisible ? "block" : "none" }}>
      <Col lg={12} className="responsive-col2">
        <div className="type-animation-wrapper2">
          <TypeAnimation
            key={`${a2Value}-${b2Value}-${c2Value}-${d2Value}`}
            sequence={[
              `Toplam Gözaltı Sayısı: ${formatNumber(a2Value)}`,
              2700, // Waits 3s
              `Toplam Operasyon Sayısı: ${formatNumber(b2Value)}`,
              2700, // Waits 3s
              `Günlük Ortalama Gözaltı Sayısı: ${c2Value}`,
              2700, // Waits 3s 
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2.2em",
              fontWeight: 500,
              marginTop: "-6px",
              color: "#ff2121",
              display: "inline-block",
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default AnasayfaHeader;
