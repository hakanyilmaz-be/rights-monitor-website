import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import "./sinirdisi-text.css";

const SinirDisiGiris = () => {
  const [a1Value, setA1Value] = useState("");
  const [a2Value, setA2Value] = useState("");
  const [a3Value, setA3Value] = useState("");
  const [a4Value, setA4Value] = useState("");
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkIwP6tKmO6tKBjet3T5c4kgg9laweJMsrZ_XAWnyF-0yfX1Z2y4ARRTCuKQkKcDKQSOsC-gbSiotN/pub?gid=422544153&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA1Value(data[0][0]);
          }
          if (data.length > 0) {
            setA2Value(data[1][0]);
          }
          if (data.length > 0) {
            setA3Value(data[2][0]);
          }
          if (data.length > 0) {
            setA4Value(data[4][0]);
          }
          if (data.length > 0) {
            setA5Value(data[5][0]);
          }
          if (data.length > 0) {
            setA6Value(data[6][0]);
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
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center align-items-center">
      <h1 className="text-white fw-bold mt-5" style={{ fontSize: "3rem" }}>
        Hukuka Aykırı Sınır Dışı ve İadeler
          </h1>
        <Col lg={6} className="text-start">

      

          <p className="small-paragraph text-white">
           15 Temmuz 2016’dan sonra özgürlük ve güvenlik haklarını muhafaza
            etmek amacıyla Türkiye’den kaçarak yurt dışına sığınan ya da daha
            önceden oradaki Gülen Hareketi’ne bağlı kuruluşlarda çalışan
            kişilerin hukuk dışı yollarla, kaçırılarak Türkiye’ye getirilmeleri
            hadiseleri vuku bulmaya başladı.
          </p>
          <p className="small-paragraph text-white">
            Erdoğan hükümeti, 2016’dan sonra Gülen Hareketi’ne yönelik cadı
            avını, uluslararası alanda da sürdürme yoluna giderek bu konuyu dış
            politika ajandasının önemli bir maddesi hâline getirdi, ikili
            ilişkilerinde bu konuda sürekli talepkâr davrandı ve yurt dışında
            yaşayan Gülen Hareketi mensuplarını her fırsatta açıktan tehdit
            etti. Hareket mensubu kişilerin Türkiye’ye iadelerinin sağlanması,
            Türkiye dış politikasının önceliklerinden biri olarak belirlendi.
          </p>
          <p className="small-paragraph text-white">
            İçişleri Bakanlığı kararıyla önce 50 bin ardından toplamda 250 bin
            pasaportun iptal edilmesi OHAL döneminin ilk kararlarından biriydi.
            İptal edilen pasaportlar Türk Emniyeti tarafından hızla İnterpol
            sistemine girildi.
          </p>
          <p className="small-paragraph text-white">
            Eylül 2016’da, Erdoğan, Gülen hareketi üyeleri için hiçbir ülkenin
            güvenli olmadığını duyurdu. Eylül 2018’de Erdoğan’ın sözcüsü İbrahim
            Kalın yurt dışında Hizmet Hareketi mensuplarına yönelik operasyonlar
            olabileceğini söylemek konusunda hiçbir çekince duymadı. Dönemin
            Dışişleri Bakanı Mevlüt Çavuşoğlu’nun yaptığı açıklamalara göre,
            Haziran 2018 itibariyle en az 100'den fazla Hareket mensubu yurt
            dışından Türkiye’ye getirilmiş; Adalet Bakanı Yılmaz Tunç’un
            açıklamasına göre de, 2024 yılı Mayıs ayı itibariyle 115 ülkeye 1560
            kişi hakkında toplam 1693 adet iade talebi iletilmiştir.
          </p>
          <p className="small-paragraph text-white">
            Bu operasyonlar, çoğunlukla Türkiye’nin ikili ilişkilerinin iyi
            olduğu ve Afrika, Asya ve Balkan ülkelerinde gerçekleşmis, bu
            ülkelerdeki güvenlik görevlileriyle MİT arasındaki koordinasyon
            neticesinde, hareket mensupları o ülkelerin yasalarına dahi aykırı
            biçimde alıkonulmuş ve Türk yetkililere teslim edilmişlerdir.
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ marginTop: "-8rem" }}
        >
          <div className="first-data" style={{ marginBottom: '4rem' }}>
            <h4 className="header-first text-center">
              Uluslararası Hukuka Aykırı Şekilde Türkiye'ye Götürülme Vakaları
            </h4>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item"> {a1Value} farklı olayda</div>
                <div className="i-title-item">{a2Value} farklı ülkeden</div>
                <div className="i-title-item">{a3Value} kişi</div>
              </div>
            </div>
          </div>
          <div className="second-data" style={{ marginTop: '4rem' }}>
            <h4 className="text-white text-center">
              Reddedilen İade Talepleri
            </h4>

            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item"> {a4Value} farklı olayda</div>
                <div className="i-title-item">{a5Value} farklı ülke</div>
                <div className="i-title-item">{a6Value} kişi</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SinirDisiGiris;
