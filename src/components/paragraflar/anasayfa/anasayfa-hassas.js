import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from 'react-router-dom';

const AnasayfaHassas = () => {
  const [a2Value, setA2Value] = useState(0);
  const [b2Value, setB2Value] = useState(0);
  const [c2Value, setC2Value] = useState(0);
  const [d2Value, setD2Value] = useState(0);
  const navigate = useNavigate();
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleButtonClick = () => {
    navigate('/hassasgruplar');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          fetchCSVData();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 } // %10'u göründüğünde tetiklenir
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const fetchCSVData = () => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
    axios
      .get(csvUrl)
      .then((response) => {
        const data = parseCSV(response.data);
        if (data.length > 0) {
          setA2Value(Number(data[6][8]));
          if (data.length > 1) {
            setB2Value(Number(data[7][8]));
          }
          if (data.length > 1) {
            setC2Value(Number(data[8][8]));
          }
          if (data.length > 1) {
            setD2Value(Number(data[9][8]));
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  const parseCSV = (csvText) => {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1);
  };

  return (
    <Container ref={ref}>
      <h2 className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>
        Hassas Gruplar
      </h2>
      <p className="text-center mt-4" style={{ color: "white" }}>
        Hamile ve yeni doğum yapmış kadınlar, ciddi derecede hasta olan bireyler, yaşlılar ve engelli kişilerin tutuklanması keyfi tutuklama olarak değerlendirilmektedir.
      </p>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>Hamile Ve Çocuklu Kadınlar: {a2Value} kişi</h5>
        <ProgressBar
          completed={a2Value}
          bgColor="#4caf50"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>Hastalar: {b2Value} kişi</h5>
        <ProgressBar
          completed={b2Value}
          bgColor="#b84f21"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>Engelliler: {c2Value} kişi</h5>
        <ProgressBar
          completed={c2Value}
          bgColor="#4c6faf"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>Yaşlılar: {d2Value} kişi</h5>
        <ProgressBar
          completed={d2Value}
          bgColor="#af4caf"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="buttons">
        <button className="btn-hover color-5" onClick={handleButtonClick}>
          Hamile, Hasta, Yaşlı ve Engelli Tutuklular
        </button>
      </div>
    </Container>
  );
};

export default AnasayfaHassas;
