import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import "./anasayfa-text.css"


const AnasayfaKitlesel = () => {
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const [a4Value, setA4Value] = useState("");

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

  const text = `2014 yılı Nisan ayından bugüne kadar, Gülen Hareketi mensuplarını gözaltına almak maksadıyla ülke genelinde toplamda ${formatNumber(a1Value)}’den fazla polis operasyonu düzenlenmiş,Bu operasyonlar sonucunda yaklaşık ${formatNumber(a2Value)} kişi gözaltına alınmıştır. Bu veriler doğrultusunda günde ortalama ${formatNumber(a3Value)} kişi Gülen hareketi ile iltisakli olduğu gerekçesi ile özgürlük ve güvenlik hakkından mahrum edilmektedir.  ${formatNumber(a4Value)}`;
  
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); 
      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

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
          <h2  className="text-center gradient-text mb-4" style={{ fontSize: "2.7rem" }}>Kitlesel Gözaltılar</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span><p>
          {`2014 yılı Nisan ayından bugüne kadar, Gülen Hareketi mensuplarını gözaltına almak maksadıyla ülke genelinde en az `}
          {highlightedText(formatNumber(a2Value))}
          {` polis operasyonu düzenlenmiştir. Bu operasyonlar sonucunda yaklaşık `}
          {highlightedText(formatNumber(a1Value))}
          {` kişi gözaltına alınmıştır. Bu veriler doğrultusunda günde ortalama `}
          {highlightedText(formatNumber(a3Value))}
          {` kişi Gülen hareketi ile iltisakli olduğu gerekçesi ile özgürlük ve güvenlik hakkından mahrum edilmektedir. `}
     
          </p></span>
      </motion.div>
    </Container>
  );
};

export default AnasayfaKitlesel;
