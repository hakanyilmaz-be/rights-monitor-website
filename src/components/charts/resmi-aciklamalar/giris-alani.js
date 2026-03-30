import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "./giris-alani.css";

const GirisAlani = () => {
  const { t } = useTranslation();

  const [stats, setStats] = useState({
    latestDetention: 0,
    latestArrest: 0,
    latestDigitalMaterial: 0,
    latestPassportCancellation: 0,
    detentionFooter: "",
    arrestFooter: "",
    digitalFooter: "",
    passportFooter: "",
  });

  const [loading, setLoading] = useState(true);

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvGZIkAcvgd0BMjaCig4INi1cXa2nyw4wJnyjRN4XvUEB8dSbKfPVYXjwcrzhHVcBp17fCD4sdA3-y/pub?gid=597627708&single=true&output=csv";

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await axios.get(csvUrl);
        const data = parseCSV(response.data);

        const detentionData = getMaxValueWithRow(data, 7); // H
        const arrestData = getMaxValueWithRow(data, 8); // L
        const digitalData = getMaxValueWithRow(data, 6); // V
        const passportData = getLatestNonEmptyFValue(data);
        const passportRow = getLatestNonEmptyFRow(data);
        

        setStats({
          latestDetention: detentionData.value,
          latestArrest: arrestData.value,
          latestDigitalMaterial: digitalData.value,
          latestPassportCancellation: passportData,
          detentionFooter: buildFooterFromRow(detentionData.row),
          arrestFooter: buildFooterFromRow(arrestData.row),
          digitalFooter: buildFooterFromRow(digitalData.row),
          passportFooter: buildFooterFromRow(passportRow),
        });
      } catch (error) {
        console.error("Error fetching CSV data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCSVData();
  }, [csvUrl]);

  const cards = useMemo(
    () => [
      {
        title: t("giris_alani.latest_detention"),
        value: stats.latestDetention,
        subTitle: t("giris_alani.general_data"),
        footer: stats.detentionFooter,
        cardClass: "card-type-1",
      },
      {
        title: t("giris_alani.latest_arrest"),
        value: stats.latestArrest,
        subTitle: t("giris_alani.general_data"),
        footer: stats.arrestFooter,
        cardClass: "card-type-2",
      },
      {
        title: t("giris_alani.latest_digital_material"),
        value: stats.latestDigitalMaterial,
        subTitle: t("giris_alani.general_data"),
        footer: stats.digitalFooter,
        cardClass: "card-type-1",
      },
      {
        title: t("giris_alani.latest_passport_cancellation"),
        value: stats.latestPassportCancellation,
        subTitle: t("giris_alani.general_data"),
        footer: stats.passportFooter,
        cardClass: "card-type-2",
      },
    ],
    [stats, t]
  );

  return (
    <section className="giris-alani-wrapper">
      <Container fluid className="giris-alani-container">
        <Row className="justify-content-center giris-header-row">
          <Col lg={12} className="text-center">
            <h1 className="giris-main-title">{t("giris_alani.main_title")}</h1>
            <p className="giris-main-subtitle">
              {t("giris_alani.main_subtitle")}
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col lg={12}>
            <div className="giris-panel">
              <h2 className="giris-panel-title">
                {t("giris_alani.highlight_title")}
              </h2>

              <Row className="g-3 mt-1">
                {cards.map((card, index) => (
                  <Col xl={3} lg={6} md={6} sm={12} key={index}>
                    <div className={`stat-card ${card.cardClass}`}>
                      <div className="stat-card-title">{card.title}</div>

                      <div className="stat-card-value">
                        {loading ? (
                          "..."
                        ) : (
                          <CountUp
                            start={0}
                            end={Number(card.value) || 0}
                            duration={2}
                            formattingFn={(value) => formatNumber(value)}
                          />
                        )}
                      </div>

                      <div className="stat-card-subtitle">{card.subTitle}</div>

                      <div className="stat-card-footer">
                        {loading ? "..." : card.footer || "-"}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
            <Col lg={12}>
                <div className="giris-description">
                <p>{t("giris_alani.description")}</p>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

/* CSV parse */
function parseCSV(csvText) {
  const rows = [];
  let row = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(current.trim());
      current = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }

      row.push(current.trim());

      if (row.some((cell) => cell !== "")) {
        rows.push(row);
      }

      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  if (current || row.length) {
    row.push(current.trim());
    if (row.some((cell) => cell !== "")) {
      rows.push(row);
    }
  }

  return rows.slice(1);
}

/* Sayı temizleme */
function normalizeNumber(value) {
  if (value === null || value === undefined) return 0;
  const cleaned = String(value).replace(/[^\d]/g, "");
  return cleaned ? Number(cleaned) : 0;
}

/* İlgili sütundaki max değeri ve o satırı bul */
function getMaxValueWithRow(data, columnIndex) {
  let maxValue = 0;
  let maxRow = null;

  data.forEach((row) => {
    const numericValue = normalizeNumber(row[columnIndex]);

    if (numericValue > maxValue) {
      maxValue = numericValue;
      maxRow = row;
    }
  });

  return {
    value: maxValue,
    row: maxRow,
  };
}


/* Tarihi parse eder */
function parseDateValue(dateString) {
  if (!dateString) return 0;

  const str = String(dateString).trim();

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(str)) {
    const [day, month, year] = str.split(".");
    return new Date(year, month - 1, day).getTime();
  }

  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(str)) {
    const [month, day, year] = str.split("/");
    return new Date(year, month - 1, day).getTime();
  }

  const parsed = Date.parse(str);
  return isNaN(parsed) ? 0 : parsed;
}


/* F sütunu dolu olanlar içinden en güncel tarihi bulur */
function getLatestNonEmptyFValue(data) {
  let latestRow = null;
  let latestTimestamp = 0;

  data.forEach((row, index) => {
    const rawDate = row[3]; // C
    const fValue = String(row[13] || "").trim(); // F

    console.log("---- ROW ----");
    console.log("Index:", index);
    console.log("C (date):", rawDate);
    console.log("F (value):", fValue);

    // F boşsa atla
    if (!fValue) {
      console.log("❌ F boş → SKIP");
      return;
    }

    const timestamp = parseDateValue(rawDate);
    console.log("Parsed timestamp:", timestamp);

    if (timestamp > latestTimestamp) {
      console.log("✅ YENİ EN GÜNCEL BULUNDU");

      latestTimestamp = timestamp;
      latestRow = row;
    }
  });

  console.log("===== SONUÇ =====");
  console.log("Latest Row:", latestRow);

  if (latestRow) {
    console.log("Final C (date):", latestRow[3]);
    console.log("Final F (value):", latestRow[13]);
  } else {
    console.log("❌ Hiç uygun satır bulunamadı");
  }

  return latestRow ? latestRow[13] : "";
}

/* Footer = aynı satırdaki A ve D sütunu  */
function buildFooterFromRow(row) {
  if (!row) return "";

  const name = row[0] ? row[0].trim() : "";
  const date = row[3] ? row[3].trim() : "";

  if (name && date) return `${name} — ${date}`;
  if (name) return name;
  if (date) return date;

  return "";
}

/* 17 . 890 gibi göster */
function formatNumber(num) {
  if (!num) return "0";

  return Math.round(num)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "\u2009,\u2009");
}

function getLatestNonEmptyFRow(data) {
  let latestRow = null;
  let latestTimestamp = 0;

  data.forEach((row) => {
    const rawDate = row[3]; // tarih sütunu
    const fValue = String(row[13] || "").trim(); // hedef sütun

    if (!fValue) return;

    const timestamp = parseDateValue(rawDate);

    if (timestamp > latestTimestamp) {
      latestTimestamp = timestamp;
      latestRow = row;
    }
  });

  return latestRow;
}

export default GirisAlani;