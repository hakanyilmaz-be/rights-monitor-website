import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import CountUp from "react-countup";
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from 'react-router-dom';

const AnasayfaOlumler = () => {
  const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a5Value, setA5Value] = useState("");
  const [isCounting, setIsCounting] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();


  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/deaths');
    } else {
      navigate('/tr/olumler');
    }
  };

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true);
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
  }, [isCounting]);

  function parseCSV(csvText) {
    const rows = csvText
      .split(/\r?\n/)
      .map((row) => row.split(",").map((cell) => cell.trim()));
    return rows.slice(1);
  }

  return (
    <div ref={ref}>
      <h2 className="text-center gradient-text" style={{ fontSize: "6.2rem" }}>
        {isCounting && <CountUp start={700} end={a5Value} duration={5} />}
      </h2>
      <h6 className="text-center gradient-text" style={{ fontSize: "1.4rem" }}>
        {t('total_deaths')}
      </h6>
      <p style={{ paddingLeft: "6%" }} className="mt-4">
        {t('death_description', { count: a5Value })}{" "}
        <span style={{ color: "red" }}>
          <b>{t('children_deaths')}</b>
        </span>
      </p>
      <div className="buttons">
        <button className="btn-hover color-5" onClick={handleButtonClick}>
          {t('life_right_violation_stats')}
        </button>
      </div>
    </div>
  );
};

export default AnasayfaOlumler;
