import React, { useEffect, useState } from "react";
import axios from "axios";

const YillarAciklama = () => {
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
            setA5Value(data[0][10]);
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
     <h2 style={{ fontWeight: 'bold' }}>Cadı Avının Kronolojisi</h2>
      <p className="small-paragraph">
        Gülen hareketi üyelerine yönelik kitlesel polis operasyonları 2014 yılı
        Nisan ayında 8 polisin gözaltına alındığı operasyon ile başlamıştır.
        Gülen hareketine yönelik zulüm, iktidar tarafından, Türkiye'de önemli
        bir kırılma anına işaret eden 15 Temmuz 2026 tarihli başarısız darbe
        girişimine dayandırılarak meşrulaştırılmaya çalışılmaktadır. Ancak,
        veriler bu iddianın aksini göstermektedir. Gülen hareketi mensuplarına
        yönelik operasyonlar, 15 Temmuz 2016 öncesi zaten 72 ile yayılmış
        durumdaydı. Darbe girişiminden önce 250'den fazla operasyonda 5 bine
        yakın kişi gözaltına alınmıştı. Darbe girişimi sonrasında ise Gülen
        hareketi mensuplarına yönelik operasyonlar adeta 'kazıma' şeklinde
        gerçekleşmeye başlamıştır.
      </p>
      <p className="small-paragraph">
        Bu kapsamda 2016, 2017 ve 2018 seneleri boyunca gerçekleşen binlerce
        operasyonda onbinlerce kişi keyfi şekilde gözaltına alınmıştır.
        İlerleyen yıllarda gözaltına alınan insanların sayısında göreceli bir
        düşüş gözlemlense de bu düşüşün istikrarlı olmadığı ve Gülen hareketi
        ile bir şekilde 'iltisaklı' olan herkesin hala hukuksuzca gözaltına
        alındığı bir gerçektir. 2024 senesi içerisinde ise bugüne kadar en az{" "}
        {a5Value} kişi gözaltına alınmıştır.
      </p>
    </div>
  );
};

export default YillarAciklama;
