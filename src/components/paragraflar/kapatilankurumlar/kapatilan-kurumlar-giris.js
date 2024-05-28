import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";

const KapatilanKurumlarGiris = () => {
  const [a5Value, setA5Value] = useState("");
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ7luwTsBBVIPJbcS195bFfU6JMnKvuMCxn3YdGUJBQU9rXsNg9Xi6PYw_WLTwGGG4L4VZBh2sEBtM/pub?gid=303660759&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[3][3]);
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

  const dotVariants = {
    hidden: { scale: 1, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      x: [0, Math.random() * 200 - 100, 0],
      y: [0, Math.random() * 200 - 100, 0],
      transition: { duration: 3, times: [0, 0.5, 1] },
    }),
    exit: {
      scale: 1,
      opacity: 0,
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDots(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            Türkiye'de, 15 Temmuz 2016'dan bu yana olağanüstü hal kararnameleri
            ve idari kararlar, {" "}{a5Value} kurumun kapatılması ve el konulmasına yol
            açtı. 16 kategori altında değerlendirilebilecek kurumların
            kapatılması ve el konulması demokratik değerler ile bağdaşmayan
            “aşırı” yaptırımlardır. Bahsi geçen “aşırı” yaptırımlar, hükümetin
            ifade özgürlüğüne, eğitime, sivil topluma ve halk sağlığına olan
            bağlılığı konusunda endişelere neden olarak Türkiye'nin siyasi ve
            toplumsal yapısında derin izler bırakmıştır.
          </p>
          <p className="small-paragraph text-white">
            Gülen Hareketi'nin kapatılan ve el konulan kurumlarıyla ilgili
            yaşananlar, hukukun üstünlüğü, ifade özgürlüğü ve mülkiyet hakları
            gibi temel demokratik prensiplerle çatışan bir dizi olayı
            içermektedir. Kapatılan ve el konulan kurumların arasında medya
            kuruluşları, eğitim kurumları, vakıflar ve sağlık tesisleri yer
            almaktadır. Bu kurumlara uygulanan kapatma ve el koyma işlemleri
            muhalif sesler üzerinde baskı oluşturarak, etkilenen sektörler
            üzerinde ciddi tahribata neden olarak, eğitim fırsatlarını azaltarak
            ve sağlık hizmetlerinde erişimi kısıtlayarak ülkenin demokratik
            ilkelerini ve sivil toplum gücünü azaltmıştır. Gülen Hareketi
            mensuplarına yönelik yoğun ve yaygın sistematik tutuklamalar,
            ihraçlar, işkence ve sosyal lincin yanında tarihte az görülmüş
            kitlesel mülkiyet hakkı ihlalleri gerçekleştirilmiştir.
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ marginTop: "-8rem" }}
        >
          {showDots && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              className="position-relative"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  custom={i}
                  className="dot"
                  variants={dotVariants}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    position: "absolute",
                  }}
                />
              ))}
            </motion.div>
          )}
          {!showDots && (
            <>
              <motion.h2
                className="text-white"
                style={{ fontSize: "6.2rem", position: "relative" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {a5Value}
              </motion.h2>
              <motion.h6
                className="text-white"
                style={{ fontSize: "1.4rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Kurum kapatılmıştır
              </motion.h6>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default KapatilanKurumlarGiris;
