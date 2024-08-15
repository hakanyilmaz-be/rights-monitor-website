import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import interpol from "../../../assets/img/interpol.png";
import interpolDocument from "../../../assets/img/interpol-document.png";
import "./anasayfa-text.css"
import AnasayfaKayanText from "./anasayfa-kayan-text";
import axios from "axios";
import "./buton.css"
import { useNavigate } from 'react-router-dom';
import AnasayfaMapSinirDisi from "./anasayfa-map-sinir-disi";



const AnasayfaKacirilmalar = () => {
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/illegaliade');
  };

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkIwP6tKmO6tKBjet3T5c4kgg9laweJMsrZ_XAWnyF-0yfX1Z2y4ARRTCuKQkKcDKQSOsC-gbSiotN/pub?gid=422544153&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA1Value(data[0][0]);
          }
          if (data.length > 0) {
            setA2Value(data[1][0]);
          }
          if (data.length > 0) {
            setA3Value(data[2][0]);
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
    <>
      <Row>
      <h2 className="gradient-text mb-5 text-center" style={{ fontWeight: "bold"}}>Hukuka Aykırı Sınır Dışı ve İadeler</h2>

        <Col className="interpol-resmi" lg={6}>
          <AnasayfaMapSinirDisi/>
      
         {/*  <img alt="interpol" src={interpol} className="img-fluid"/>
           <a href="https://www.patreon.com/posts/adam-kacirmalara-58333013?l=de" target="_blank"> <img alt="interpol-document" src={interpolDocument} className="img-fluid"/></a> 
          <p className="text-center" style={{fontSize: "10px"}}>
          Kaçırma olayında görevli polislerin bilgileri ve Bahreyn polisi ile Türk polisi arasındaki teslim tesellüm tutanağı
          </p> */}

        </Col>
        <Col lg={6}>
        
          <AnasayfaKayanText/>
          <p >
          İllegal sınır dışı edilme işlemleri ve iade taleplerinde güncel olarak kaydedilen vaka sayısı en az {a1Value}, mağdur olan ise en az {a3Value} kişidir.</p>
          <div class="buttons">
    <button class="btn-hover color-5" onClick={handleButtonClick}>Ulusötesi Baskı</button>
      </div>
        </Col>
    
      </Row>
    </>
  );
};

export default AnasayfaKacirilmalar;
