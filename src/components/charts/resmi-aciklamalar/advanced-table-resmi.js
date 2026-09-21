import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./advanced-tableresmi.css";

const AdvancedTableResmi = () => {
  const { t, i18n } = useTranslation();

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedOfficial, setSelectedOfficial] = useState("all");

  const csvUrl =
    i18n.language === "tr"
      ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvGZIkAcvgd0BMjaCig4INi1cXa2nyw4wJnyjRN4XvUEB8dSbKfPVYXjwcrzhHVcBp17fCD4sdA3-y/pub?gid=597627708&single=true&output=csv"
      : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvGZIkAcvgd0BMjaCig4INi1cXa2nyw4wJnyjRN4XvUEB8dSbKfPVYXjwcrzhHVcBp17fCD4sdA3-y/pub?gid=1191448961&single=true&output=csv";

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(csvUrl);
        const parsedRows = parseCSV(response.data);

        if (!parsedRows || parsedRows.length < 2) {
          setRows([]);
          setLoading(false);
          return;
        }

        const headerRow = parsedRows[0];
        const dataRows = parsedRows.slice(1);

        const statHeaders = headerRow
          .slice(4, 32)
          .map((h) => String(h || "").trim());

        const rawItems = dataRows
          .filter((row) => row.some((cell) => String(cell || "").trim() !== ""))
          .map((row, index) => ({
            tempId: `row-${index}`,
            official: String(row[0] || "").trim(), // A
            category: String(row[1] || "").trim(), // B
            date: String(row[3] || "").trim(), // D
            statistics: collectRowStatistics(row, statHeaders), // E - AD
            description: String(row[32] || "").trim(), // AE
            source: String(row[33] || "").trim(), // AF
            year: extractYear(String(row[3] || "").trim()),
          }));

        const groupedItems = groupRows(rawItems);
        setRows(groupedItems);
      } catch (error) {
        console.error("CSV fetch error:", error);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCSVData();
  }, [csvUrl, i18n.language]);

  const yearOptions = useMemo(() => {
    return rows
      .map((item) => item.year)
      .filter(Boolean)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) => Number(b) - Number(a));
  }, [rows]);

  const officialOptions = useMemo(() => {
    return rows
      .map((item) => item.official)
      .filter(Boolean)
      .filter((value, index, arr) => arr.indexOf(value) === index)
      .sort((a, b) =>
        a.localeCompare(b, i18n.language === "tr" ? "tr" : "en")
      );
  }, [rows, i18n.language]);

  const filteredRows = useMemo(() => {
    let result = [...rows];

    if (selectedYear !== "all") {
      result = result.filter((item) => item.year === selectedYear);
    }

    if (selectedOfficial !== "all") {
      result = result.filter((item) => item.official === selectedOfficial);
    }

    if (searchTerm.trim()) {
      const locale = i18n.language === "tr" ? "tr" : "en";
      const q = searchTerm.toLocaleLowerCase(locale);

      result = result.filter((item) => {
        const official = (item.official || "").toLocaleLowerCase(locale);
        const category = (item.category || "").toLocaleLowerCase(locale);
        const description = (item.description || "").toLocaleLowerCase(locale);
        const date = (item.date || "").toLocaleLowerCase(locale);
        const statsText = item.statistics
          .map((stat) => `${stat.label} ${stat.value}`)
          .join(" ")
          .toLocaleLowerCase(locale);

        return (
          official.includes(q) ||
          category.includes(q) ||
          description.includes(q) ||
          date.includes(q) ||
          statsText.includes(q)
        );
      });
    }

    return result.sort((a, b) => compareDatesDesc(a.date, b.date));
  }, [rows, selectedYear, selectedOfficial, searchTerm, i18n.language]);

  return (
    <section className="advanced-table-wrapper-resmi">
      <div className="advanced-table-container-resmi">
    

        <div className="advanced-filter-box-resmi">
          <div className="advanced-filter-row-resmi">
            <div className="filter-group-inline filter-search">
              <label className="advanced-filter-label">
                {tt(t, "advanced_tableresmi.search", "Arama:")}
              </label>
              <Form.Control
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="advanced-filter-input"
                placeholder={tt(
                  t,
                  "advanced_tableresmi.search_placeholder",
                  "Kişi, kategori, açıklama..."
                )}
              />
            </div>

            <div className="filter-group-inline filter-year">
              <label className="advanced-filter-label">
                {tt(t, "advanced_tableresmi.year", "Yıl:")}
              </label>
              <Form.Select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="advanced-filter-select"
              >
                <option value="all">
                  {tt(t, "advanced_tableresmi.all", "Tümü")}
                </option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className="filter-group-inline filter-official">
              <label className="advanced-filter-label">
                {tt(t, "advanced_tableresmi.official", "Yetkili:")}
              </label>
              <Form.Select
                value={selectedOfficial}
                onChange={(e) => setSelectedOfficial(e.target.value)}
                className="advanced-filter-select"
              >
                <option value="all">
                  {tt(t, "advanced_tableresmi.all", "Tümü")}
                </option>
                {officialOptions.map((official) => (
                  <option key={official} value={official}>
                    {official}
                  </option>
                ))}
              </Form.Select>
            </div>

            <div className="advanced-filter-count">
              {filteredRows.length}{" "}
              {tt(t, "advanced_tableresmi.records", "açıklama")}
            </div>
          </div>
        </div>

        <div className="advanced-table-box">
          <div className="advanced-table-scroll">
            <table className="advanced-custom-table">
              <thead>
                <tr>
                  <th className="th-date">
                    {tt(t, "advanced_tableresmi.columns.date", "TARİH")} ▼
                  </th>
                  <th className="th-official">
                    {tt(
                      t,
                      "advanced_tableresmi.columns.official",
                      "YETKİLİ"
                    )}
                  </th>
                  <th className="th-category">
                    {tt(
                      t,
                      "advanced_tableresmi.columns.category",
                      "KATEGORİ"
                    )}
                  </th>
                  <th className="th-statistics">
                    {tt(
                      t,
                      "advanced_tableresmi.columns.statistics",
                      "İSTATİSTİKLER"
                    )}
                  </th>
                  <th className="th-description">
                    {tt(
                      t,
                      "advanced_tableresmi.columns.description",
                      "AÇIKLAMA"
                    )}
                  </th>
                  <th className="th-source">
                    {tt(t, "advanced_tableresmi.columns.source", "KAYNAK")}
                  </th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="advanced-empty-cell">
                      {tt(t, "advanced_tableresmi.loading", "Yükleniyor...")}
                    </td>
                  </tr>
                ) : filteredRows.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="advanced-empty-cell">
                      {tt(
                        t,
                        "advanced_tableresmi.no_results",
                        "Sonuç bulunamadı."
                      )}
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((item) => (
                    <tr key={item.id}>
                      <td className="td-date">
                        {formatDisplayDate(item.date) || "-"}
                      </td>
                      <td className="td-official">{item.official || "-"}</td>
                      <td className="td-category">{item.category || "-"}</td>

                      <td className="td-statistics">
                        {item.statistics.length > 0 ? (
                          <div className="stats-list">
                            {item.statistics.map((stat, idx) => (
                              <div
                                className="stat-pill"
                                key={`${item.id}-stat-${idx}`}
                              >
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-value">
                                  {formatDisplayNumber(stat.value)}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="no-stat">-</span>
                        )}
                      </td>

                      <td className="td-description">
                        <ExpandableDescription text={item.description} />
                      </td>

                      <td className="td-source">
                        {item.source ? (
                          <Button
                            className="source-btn"
                            onClick={() =>
                              window.open(
                                item.source,
                                "_blank",
                                "noopener,noreferrer"
                              )
                            }
                          >
                            {tt(
                              t,
                              "advanced_tableresmi.source_button",
                              "Kaynak"
                            )}
                          </Button>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </section>
  );
};

function ExpandableDescription({ text }) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useTranslation();

  const safeText = String(text || "").trim();

  if (!safeText) {
    return <span>-</span>;
  }

  const limit = 220;
  const isLong = safeText.length > limit;
  const preview = isLong ? `${safeText.substring(0, limit)}...` : safeText;

  return (
    <div className="expandable-description">
      <span>{expanded ? safeText : preview}</span>

      {isLong && (
        <button
          type="button"
          className="expand-description-btn"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded
            ? tt(t, "advanced_tableresmi.read_less", "Daha az")
            : tt(t, "advanced_tableresmi.read_more", "Daha fazla")}
        </button>
      )}
    </div>
  );
}

function tt(t, key, fallback) {
  const result = t(key);
  return result === key ? fallback : result;
}

function collectRowStatistics(row, headers) {
  const stats = [];

  for (let colIndex = 4; colIndex <= 31; colIndex++) {
    const rawValue = row[colIndex];
    const label = headers[colIndex - 4];

    if (isFilled(rawValue) && isFilled(label)) {
      stats.push({
        label: String(label).trim(),
        value: String(rawValue).trim(),
      });
    }
  }

  return stats;
}

function groupRows(items) {
  const map = new Map();

  items.forEach((item, index) => {
    const key = [
      normalizeKey(item.date),
      normalizeKey(item.official),
      normalizeKey(item.category),
      normalizeKey(item.description),
      normalizeKey(item.source),
    ].join("|||");

    if (!map.has(key)) {
      map.set(key, {
        id: `group-${index}`,
        official: item.official,
        category: item.category,
        date: item.date,
        description: item.description,
        source: item.source,
        year: item.year,
        statistics: [...item.statistics],
      });
    } else {
      const existing = map.get(key);
      const mergedStats = [...existing.statistics, ...item.statistics];
      existing.statistics = dedupeStatistics(mergedStats);
    }
  });

  return Array.from(map.values());
}

function dedupeStatistics(stats) {
  const seen = new Set();
  const result = [];

  stats.forEach((stat) => {
    const key = `${normalizeKey(stat.label)}|||${normalizeKey(stat.value)}`;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(stat);
    }
  });

  return result;
}

function normalizeKey(text) {
  return String(text || "").trim();
}

function isFilled(value) {
  return value !== undefined && value !== null && String(value).trim() !== "";
}

function extractYear(dateString) {
  if (!dateString) return "";
  const match = String(dateString).trim().match(/(\d{4})$/);
  return match ? match[1] : "";
}

function compareDatesDesc(dateA, dateB) {
  return parseDateToComparable(dateB) - parseDateToComparable(dateA);
}

function parseDateToComparable(dateString) {
  if (!dateString) return 0;
  const trimmed = String(dateString).trim();

  if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(trimmed)) {
    const [day, month, year] = trimmed.split(".");
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }

  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed)) {
    const [month, day, year] = trimmed.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
  }

  const parsed = Date.parse(trimmed);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function formatDisplayNumber(value) {
  const str = String(value || "").trim();

  if (/^[\d.,\s]+$/.test(str)) {
    const digitsOnly = str.replace(/[^\d]/g, "");
    if (!digitsOnly) return str;
    return digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return str;
}

function formatDisplayDate(value) {
  const str = String(value || "").trim();

  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(str)) {
    const [month, day, year] = str.split("/");
    return `${day.padStart(2, "0")}.${month.padStart(2, "0")}.${year}`;
  }

  return str;
}

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
      if (char === "\r" && nextChar === "\n") i++;
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

  return rows;
}

export default AdvancedTableResmi;