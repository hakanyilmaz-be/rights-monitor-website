import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container} from "react-bootstrap";
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import CountUp from "react-countup";
import "./anasayfa-text.css"
import "./buton.css"
import { useNavigate } from 'react-router-dom';



const AnasayfaIhraclar = () => {
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ihraclar');
  };


  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";
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
    <Container>
        <h2  className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>İhraçlar</h2>

      <h3 className="fw-bold mt-5 baslik ">
        <AnimatedGradientText>
          <CountUp
            style={{ color: "red" }}
            start={0}
            end={a6Value}
            duration={5}
          />{" "}
          Meslek grubundan en az{" "}
          <CountUp start={0} end={a5Value} duration={5} /> kişi ihraç
          edilmiştir.
        </AnimatedGradientText>
      </h3>

      <div style={{ height: "30px" }}></div>

      <p className="text-white">
        15 Temmuz 2016, ülke tarihindeki en kritik dönüm noktalarından biri
        olarak kayıtlara geçmiştir. Bu tarihin ardından hükümet, Olağanüstü Hal
        (OHAL) ilan ederek “tedbir” adını verdiği geniş kapsamlı uygulamalara
        başvurmuştur. OHAL kapsamında çıkarılan Kanun Hükmünde Kararnameler
        (KHK) aracılığıyla, 229 Meslek grubundan en az 134258 kişi ihraç
        edilmiştir.
      </p>
      <div class="buttons">
    <button class="btn-hover color-7" onClick={handleButtonClick}>İhraçlara Dair İstatistikler</button>
      </div>
    </Container>
  );
};

export default AnasayfaIhraclar;
