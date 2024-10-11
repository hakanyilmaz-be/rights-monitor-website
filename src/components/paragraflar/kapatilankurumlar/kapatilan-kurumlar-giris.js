import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./kapatilan-text.css";

const KapatilanKurumlarGiris = () => {
  const { t } = useTranslation(); // Access the translation function
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
    return rows.slice(1); // Skip header
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
      className="d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white fw-bold mt-5" style={{ fontSize: "2rem" }}>
          {t("kapatilanKurumlar.title")}
        </h1>
        <Col lg={6} className="text-start">
          <p className="small-paragraph text-white">
            {t("kapatilanKurumlar.description", { count: a5Value })}
          </p>
          <p className="small-paragraph text-white">
            {t("kapatilanKurumlar.secondParagraph")}
          </p>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
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
                style={{ fontSize: "5.2rem", position: "relative" }}
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
                {t("kapatilanKurumlar.footer")}
              </motion.h6>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default KapatilanKurumlarGiris;
