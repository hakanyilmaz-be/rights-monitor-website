import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from 'react-router-dom';



const AnasayfaHassas = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a2Value, setA2Value] = useState(0);
  const [b2Value, setB2Value] = useState(0);
  const [c2Value, setC2Value] = useState(0);
  const [d2Value, setD2Value] = useState(0);
  const navigate = useNavigate();
  const ref = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  const { i18n } = useTranslation();



  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/vulnerable-groups');
    } else {
      navigate('/tr/hassasgruplar');
    }
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
        {t('vulnerable_groups')}
      </h2>
      <p className="text-center mt-4" style={{ color: "white" }}>
        {t('vulnerable_groups_description')}
      </p>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>{t('pregnant_women_children')}: {a2Value} {t('people')}</h5>
        <ProgressBar
          completed={a2Value}
          bgColor="#4caf50"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>{t('sick_people')}: {b2Value} {t('people')}</h5>
        <ProgressBar
          completed={b2Value}
          bgColor="#b84f21"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>{t('disabled_people')}: {c2Value} {t('people')}</h5>
        <ProgressBar
          completed={c2Value}
          bgColor="#4c6faf"
          maxCompleted={a2Value}
          animateOnRender
          customLabel=" "
        />
      </div>
      <div className="mb-4" style={{ width: "100%" }}>
        <h5 style={{ color: "white" }}>{t('elderly_people')}: {d2Value} {t('people')}</h5>
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
          {t('vulnerable_groups_button')}
        </button>
      </div>
    </Container>
  );
};

export default AnasayfaHassas;
