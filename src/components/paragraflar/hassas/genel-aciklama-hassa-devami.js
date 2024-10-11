import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const GenelAciklamaHassasDevami = () => {
  const { t } = useTranslation();  // useTranslation hook'u ile çok dillilik desteği sağlanıyor
  const [a2Value, setA2Value] = useState("");
  const [b2Value, setB2Value] = useState("");
  const [c2Value, setC2Value] = useState("");
  const [d2Value, setD2Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=1891916443&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA2Value(Number(data[6][8]));
            setB2Value(Number(data[7][8]));
            setC2Value(Number(data[8][8]));
            setD2Value(Number(data[9][8]));
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
    return rows.slice(1);
  }

  return (
    <div>
      <p className="small-paragraph">
        {t('health_rights_for_prisoners')}
      </p>
      <p className="small-paragraph">
        {t('united_nations_rules')}
      </p>
      <p className="small-paragraph">
        {t('treatment_of_prisoners')}
      </p>
      <p className="small-paragraph">
        {t('turkish_authorities_practice')} {b2Value} {t('patientsa')}, {c2Value} {t('disabled_individuals')}, {d2Value} {t('elderly')} 
      </p>
    </div>
  );
};

export default GenelAciklamaHassasDevami;
