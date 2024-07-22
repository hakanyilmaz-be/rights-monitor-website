import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hassas-text.css";

const KadinlarAciklama = () => {
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
        Hamile ve Yeni Doğum Yapmış Kadınlar
      </h2>
      <p className="small-paragraph">
        2016'dan bu yana, özellikle Gülen Hareketi ile ilişkilendirilen binlerce
        kadın, genellikle somut deliller olmaksızın tutuklanıp alıkonulmuştur.
        Aralık 2016 sonu itibarıyla, Türkiye'deki ceza kurumlarında 201.139
        hükümlü ve tutuklu bulunmaktadır. Bunlardan 8.315'i kadın hükümlü ve
        tutuklular olup, toplam hükümlü ve tutukluların %4.1'ini
        oluşturmaktadır. 2016’dan bugüne, Gülen Hareketi ile ilişkilendirildiği
        için tutuklanan hamile ve yeni doğum yapmış en az {a5Value} kadın olduğu
        bilinmektedir.
      </p>
      
    </>
  );
};

export default KadinlarAciklama;
