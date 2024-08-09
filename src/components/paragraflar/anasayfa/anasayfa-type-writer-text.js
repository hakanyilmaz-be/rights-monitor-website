import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';

const AnasayfaTypewriterText = () => {
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const [a4Value, setA4Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=1880405891&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA1Value(data[0][9]);
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

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=507472835&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(data[5][17]);
          }
          if (data.length > 0) {
            setA3Value(data[4][17]);
          }
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=620615788&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA4Value(data[1][19]);
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

  const formatNumber = (number) => {
    return new Intl.NumberFormat('tr-TR').format(number);
  };

  const text = `2015’den bugüne toplam ${formatNumber(a1Value)} kişi hakkında soruşturma açılmış, bunlardan ${formatNumber(a2Value)} kişi hakkında kamu davası açılmış, ${formatNumber(a3Value)} kişi hakkında ise mahkumiyet kararı alınmıştır. Mahkumiyet kararına tabi olanlardan ${formatNumber(a4Value)} kişi 18 yaşının altındadır.`;
  
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
       
      >
        <span className='text-white'><h6>
          {`2015’den bugüne toplam `}
          {highlightedText(formatNumber(a1Value))}
          {` kişi hakkında soruşturma açılmış, bunlardan `}
          {highlightedText(formatNumber(a2Value))}
          {` kişi hakkında kamu davası açılmış, `}
          {highlightedText(formatNumber(a3Value))}
          {` kişi hakkında ise mahkumiyet kararı alınmıştır. Mahkumiyet kararı verilenlerden `}
          {highlightedText(formatNumber(a4Value))}
          {` kişi 18 yaşının altındadır.`}
          </h6></span>
      </motion.div>
    </Container>
  );
};

export default AnasayfaTypewriterText;
