import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next hook'u dahil ettik
import "./anasayfa-text.css";
import "./buton.css";
import { useNavigate } from 'react-router-dom';
import AnasayfaIntro from '../../text-header/anasayfa-intro';
import AnasayfaHeader from '../../ana-sayfa-header/anasayfaHeader';

const AnasayfaKitlesel = () => {
  const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const [a4Value, setA4Value] = useState("");
  const navigate = useNavigate();



  const handleButtonClick = () => {
    if (i18n.language === 'en') {
      navigate('/en/mass-detentions');
    } else {
      navigate('/tr/kitlesel-gozaltilar');
    }
  };

  useEffect(() => {
    const fetchCSVData = () => {
        const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
        axios.get(csvUrl)
            .then((response) => {
                const data = parseCSV(response.data);
                if (data.length > 0) {
                  setA1Value(data[0][10]);  
                    if (data.length > 1) {
                      setA2Value(data[0][9]);  
                    }
                    if (data.length > 1) {
                      setA3Value(data[0][8]); 
                  }
                  if (data.length > 1) {
                    setA4Value(data[0][11]);  
                  }
                }
            })
            .catch(error => {
                console.error('Error fetching CSV data:', error);
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

  const formatNumber = (number) => {
    return new Intl.NumberFormat('tr-TR').format(number);
  };

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < displayedText.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + displayedText[index]);
        setIndex(index + 1);
      }, 100); 
      return () => clearTimeout(timeoutId);
    }
  }, [index, displayedText]);

  const highlightedTextVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 0],
      transition: { duration: 1.4, repeat: Infinity } // Daha yavaş animasyon için süre artırıldı
    }
  };

  const highlightedText = (value) => (
    <motion.span
      variants={highlightedTextVariants}
      initial="initial"
      animate="animate"
      style={{ fontWeight: 'bold', color: 'red' }}
    >
      {value}
    </motion.span>
  );

  return (
    <Container>
      <h2 className="text-center gradient-text mb-4" style={{ fontSize: "2.7rem" }}>
        {t('mass_detentions_title')}
      </h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>
          <p>
            {t('mass_detentions_text', {
              a2Value: highlightedText(formatNumber(a2Value)),
              a1Value: highlightedText(formatNumber(a1Value)),
              a3Value: highlightedText(formatNumber(a3Value)),
            })}
          </p>
        </span>
      </motion.div>

      <AnasayfaIntro />
      <AnasayfaHeader />

      <div className="buttons">
        <button className="btn-hover color-5" onClick={handleButtonClick}>
          {t('mass_detentions_button')}
        </button>
      </div>
    </Container>
  );
};

export default AnasayfaKitlesel;
