import React, { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const YillarAciklama = () => {
  const { t } = useTranslation();
  const [a5Value, setA5Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTHFQwv-ZFUNFPshDPD3hRR3Ub_eLX0gw1Oyl8VKOZiCg7G0KeJRWLy3D4W_CLV3moHjJZS539qyPax/pub?gid=734035153&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][12]);
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
    <div>
      <h2 style={{ fontWeight: 'bold' }}>{t('yillarAciklama.title')}</h2>
      <p className="small-paragraph">
        {t('yillarAciklama.paragraph1')}{" "}
        <a href="https://www.haberturk.com/gundem/haber/937007-adanada-operasyon-8-polis-gozaltinda" target="_blank">
          {t('yillarAciklama.operationLink')}
        </a>{" "}
        {t('yillarAciklama.paragraph2')}
      </p>
      <p className="small-paragraph">
        {t('yillarAciklama.paragraph3')} {a5Value} {t('yillarAciklama.paragraph4')}
      </p>
    </div>
  );
};

export default YillarAciklama;
