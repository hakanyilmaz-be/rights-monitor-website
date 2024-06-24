import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "./hassas-text.css";

const HassasGiris = () => {
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
            if (data.length > 1) {
              setB2Value(Number(data[7][8]));
            }
            if (data.length > 1) {
              setC2Value(Number(data[8][8]));
            }
            if (data.length > 1) {
              setD2Value(Number(data[9][8]));
            }
            animateProgress(); // Progress animasyonunu başlat
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



  function animateProgress() {
    const duration = 8000; // 3 saniye
    const steps = 80; // 30 adım
    const stepDuration = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
   
      if (step >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  }



  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
            Hassas Gruplar:
          </h1>
          {/* Metinler buraya */}
          <p className="small-paragraph ">
            Uluslararası literatürde "keyfi" teriminin kesin bir tanımı
            bulunmasa da, özgürlüğünden keyfi olarak mahrum bırakılma ve
            tutuklanma durumlarında yasal savunma hakkının sınırsız olduğu kabul
            edilir. Hükümetlerin savunmaları, tedbirlerinin "gerekli" ve
            "orantılı" olduğunu iddia etseler de, bu iddiaların
            değerlendirilmesinde çeşitli faktörler göz önünde bulundurulur.
            Ancak, hükümetin bu tutuklamaların "adaletsiz", "yasadışı" ve
            "öngörülemez" doğasını göz ardı etmesi durumunda, uluslararası
            teamül hukuku uyarınca tutukluluğun keyfi olduğuna hükmedilir.
          </p>
          <p className="small-paragraph">
            Bu bilgiler ve ulusal hukuk çerçevesinde, hamile ve yeni doğum
            yapmış kadınlar, ciddi derecede hasta olan bireyler, yaşlılar ve
            engelli kişilerin tutuklanması keyfi tutuklama olarak
            değerlendirilmelidir.
          </p>
          <p className="small-paragraph">
            Bu bilgiler ve ulusal hukuk çerçevesinde, hamile ve yeni doğum
            yapmış kadınlar, ciddi derecede hasta olan bireyler, yaşlılar ve
            engelli kişilerin tutuklanması keyfi tutuklama olarak
            değerlendirilmelidir.
          </p>
          <p className="small-paragraph ">
            Gülen Hareketi mensuplarına yönelik düzenlenen kitlesel gözaltı
            operasyonları hukuk sınırlarını çoktan aşmıştır. 2017'de tek bir
            operasyonda 3,224 kişi, 2016'da bir günde 2,745 hakim ve savcı,
            2019'da ise aynı günde 1,112 kişi, Gülen Hareketi'ne mensup olma
            iddiasıyla gözaltına alınmıştır. BM Keyfi Tutuklamalar Çalışma Grubu
            <a
              href="https://www.ohchr.org/sites/default/files/documents/issues/detention-wg/opinions/session98/a-hrc-wgad-66-2023-turkiye-aev.pdf"
              className="text-white"
            >
              <span> Görüş No. 66/2023 </span>
            </a>
            (Paragraf 63),
            <a
              href="https://www.ohchr.org/sites/default/files/documents/issues/detention-wg/opinions/session96/A-HRC-WGAD-2023-3-AEV.pdf"
              className="text-white"
            >
              <span> Görüş No. 3/2023 </span>
            </a>
            (Paragraf 85),
            <a
              href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_66.pdf"
              className="text-white"
            >
              <span> Görüş No. 66/2020 </span>
            </a>
            (Paragraf 67),
            <a
              href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_67.pdf"
              className="text-white"
            >
              <span> Görüş No. 67/2020 </span>
            </a>
            (Paragraf 96) ve
            <a
              href="https://www.ohchr.org/sites/default/files/Documents/Issues/Detention/Opinions/Session89/A_HRC_WGAD_2020_84.pdf"
              className="text-white"
            >
              <span> Görüş No. 84/2020 </span>
            </a>
            (Paragraf 76) ve diğer uluslararası kurumlar, Türkiye'nin Gülen
            Hareketi mensuplarına yönelik tutuklama ve gözaltı uygulamalarını
            insanlığa karşı suç olarak nitelendirmiş ve kınamıştır.
          </p>
          <p className="small-paragraph">
            2016'dan bu yana Türkiye'de keyfi tutuklamalara maruz kalan
            insanların yaşadığı mağduriyetler, adaletin ve insan haklarının
            ihlal edilmesinin acı bir yansımasıdır. Bu tutuklamalar, sadece
            bireylerin özgürlüğünü kısıtlamakla kalmayıp, aynı zamanda toplumun
            genel huzurunu ve güvenini de zayıflatmaktadır. Gülen Hareketi
            mensuplari, bireysel durumları göz önüne alınmaksızın hukuksuzca
            özgürlüklerinden mahrum bırakılarak, fiziki durumlarına uygun
            düşmeyen şartlar altında insanlık suçu kurbanları olarak hayatta
            kalmaya çalışmaktadırlar.
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center p-5"
          style={{ marginTop: "-6rem" }}>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>Hamile Ve Çocuklu Kadınlar: {a2Value} kişi</h5>
            <ProgressBar 
              completed={a2Value} 
              bgColor="#4caf50"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "
            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>Hastalar: {b2Value} kişi</h5>
            <ProgressBar 
              completed={b2Value} 
              bgColor="#b84f21"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>Engelliler: {c2Value} kişi</h5>
            <ProgressBar 
              completed={c2Value} 
              bgColor="#4c6faf"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
          <div className="mb-4" style={{ width: "100%" }}>
            <h5>Yaşlılar: {d2Value} kişi</h5>
            <ProgressBar 
              completed={d2Value} 
              bgColor="#af4caf"
              maxCompleted={a2Value} 
              animateOnRender 
              customLabel=" "

            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HassasGiris;
