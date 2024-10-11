import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next"; // Çeviri için i18next kullanımı
import "./hassas-text.css";

const KadinlarAciklama = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için
  const [a5Value, setA5Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[6][8]);
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
      <h2 style={{ fontWeight: "bold" }}>
        {t('pregnant_and_recently_delivered_women')}
      </h2>
      <p className="small-paragraph">
        {t('since_2016_thousands_of_women')} {a5Value} {t('known_pregnant_women')}
      </p>
    </>
  );
};

export default KadinlarAciklama;
