import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const SorusturmaKisiSayisiAciklama = () => {

  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSy1KygmD2hp-6GovKzgaucGPfsjalgQ6ArSzpAXAHeN16imXVuURPImNc8dPsNFbrxh2brJXLkVi87/pub?gid=1880405891&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA1Value(data[24][11]);
          }
          if (data.length > 0) {
            setA2Value(data[24][13]);
          }
          if (data.length > 0) {
            setA3Value(data[24][15]);
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
    <Container className='mt-4'>

        <p className="small-paragraph"> 
        Adalet Bakanlığı'nın yıllık adli sicil raporlarında 2015-2021 yılları arasında Türk Ceza Kanunu'nun (TCK) 309-316 maddeleri arasındaki suçlar ayrı ayrı raporlanmıştır. Ancak 2022 yılından itibaren bu maddeler, "Anayasal Düzene ve Bu Düzenin İşleyişine Karşı Suçlar" başlığı altında toplanarak raporlanmaya başlanmıştır.
        </p>
        <p className="small-paragraph"> 
        2015’den bugüne toplam <b>{a1Value}</b> karar verilmiş, bu kararlardan <b>{a2Value}</b> olanı kamu davası açılması yönünde, <b>{a3Value}</b> olanı ise kovuşturmaya yer olmadığı yönünde olmuştur. 2022'ye kadar olan dönemde her bir maddenin detayları ayrı ayrı raporlanırken, 2022'den itibaren bu maddeler topluca raporlanmıştır.
        </p>

    </Container>
  );
};

export default SorusturmaKisiSayisiAciklama;
