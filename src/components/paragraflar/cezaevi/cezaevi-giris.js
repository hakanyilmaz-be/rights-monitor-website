import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import AnimatedGradientText from "../../animated-gradient-text/AnimatedGradientText";
import CountUp from "react-countup";

const CezaeviGiris = () => {
  const { t, i18n } = useTranslation();
  const [a5Value, setA5Value] = useState("");
  const [a6Value, setA6Value] = useState("");

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv";
      axios
        .get(csvUrl)
        .then((response) => {
          const data = parseCSV(response.data);
          if (data.length > 0) {
            setA5Value(data[0][0]);
          }
          if (data.length > 0) {
            setA6Value(data[1][0]);
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
    return rows.slice(1); // Skip the header row
  }

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <h1 className="text-white mt-5">{t("cezaeviGiris.title")}</h1>
        <div style={{ height: "30px" }}></div>
        <Col lg={12} className="text-start">
          <p className="small-paragraph text-white">
            {t("cezaeviGiris.paragraph1")}
          </p>
          <p className="small-paragraph text-white">
            {t("cezaeviGiris.paragraph2")}
          </p>
          {i18n.language === "tr" ? (
            <AnimatedGradientText>
              <p style={{ fontSize: "20px" }}>
                15 Temmuz’dan bugüne cezaevlerinde siyasi mahpuslara yönelik 30
                farklı kategoride{" "}
                <CountUp
                  style={{ color: "red" }}
                  start={0}
                  end={a5Value}
                  duration={5}
                />{" "}
                cezaevinde en az{" "}
                <CountUp start={0} end={a6Value} duration={5} /> hak ihlalinin
                yaşandığı bilinmektedir.
              </p>
            </AnimatedGradientText>
          ) : (
            <AnimatedGradientText>
              <p style={{ fontSize: "20px" }}>
                It is known that at least{" "}
                <CountUp start={0} end={a6Value} duration={5} /> human rights
                violations have occurred in 30 different categories in{" "}
                <CountUp
                  style={{ color: "red" }}
                  start={0}
                  end={a5Value}
                  duration={5}
                />{" "}
                prisons against political prisoners since July 15.
              </p>
            </AnimatedGradientText>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CezaeviGiris;
