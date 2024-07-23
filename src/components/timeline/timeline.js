import React, { useState, useEffect } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import axios from "axios";
import Papa from "papaparse";
import { FormControl, Form } from "react-bootstrap";

const Timeline = () => {
  const [dataRows, setDataRows] = useState([]);
  const [allData, setAllData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [reverseOrder, setReverseOrder] = useState(false);

  useEffect(() => {
    const fetchCSVData = () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSc5GNUGM3KuthHw3F_J2JQyACdL8lPc5OHAHF6QlXqUKgX6Pit6wUYaDA1-VR4rjHpfvxmTLcj6Pob/pub?gid=758673166&single=true&output=csv";

      axios
        .get(csvUrl)
        .then((response) => {
          parseCSV(response.data);
        })
        .catch((error) => {
          console.error("Error fetching CSV data:", error);
        });
    };

    fetchCSVData();
  }, []);

  function parseCSV(csvText) {
    Papa.parse(csvText, {
      complete: (results) => {
        const rows = results.data;
        if (rows.length > 0) {
          const headers = rows[0];
          const columnsToShow = [0, 1, 2, 3, 4];

          const data = rows.slice(1).map((row) => {
            let rowData = {};
            columnsToShow.forEach((colIndex) => {
              rowData[headers[colIndex]] = row[colIndex];
            });
            return rowData;
          });

          const selectedColumns = [
            {
              name: headers[0],
              selector: (row) => row[headers[0]],
              sortable: true,
              wrap: true,
              grow: 0.2,
            },
            {
              name: headers[1],
              selector: (row) => row[headers[1]],
              sortable: true,
              wrap: true,
              grow: 0.2,
            },
            {
              name: headers[2],
              selector: (row) => row[headers[2]],
              sortable: true,
              wrap: true,
              grow: 0.3,
            },
            {
              name: headers[3],
              selector: (row) => row[headers[3]],
              sortable: true,
              wrap: true,
              grow: 0.2,
            },
            {
              name: headers[4],
              selector: (row) => row[headers[4]],
              sortable: true,
              wrap: true,
              grow: 0.2,
            },
          ];

          setDataRows(data);
          setAllData(data);
          setColumns(selectedColumns);
        }
      },
    });
  }

  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterText(value);
    filterData(value, selectedYear, reverseOrder);
  };

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    filterData(filterText, year, reverseOrder);
  };

  const handleReverseOrderChange = (event) => {
    const isChecked = event.target.checked;
    setReverseOrder(isChecked);
    filterData(filterText, selectedYear, isChecked);
  };

  const filterData = (text, year, reverse) => {
    let filteredData = allData;

    if (text) {
      filteredData = filteredData.filter((item) => {
        return Object.keys(item).some((key) =>
          item[key].toString().toLowerCase().includes(text.toLowerCase())
        );
      });
    }

    if (year) {
      filteredData = filteredData.filter((item) => {
        return item[columns[0].name].includes(year);
      });
    }

    if (reverse) {
      filteredData = filteredData.slice().reverse();
    }

    setDataRows(filteredData);
  };

  const renderContent = (content) => {
    const parts = content.split(/(https?:\/\/[^\s]+)/g);
    return parts.map((part, index) => {
      if (part.match(/https?:\/\/[^\s]+/g)) {
        return (
          <span key={index} style={{ display: 'block' }}>
            <a href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
          </span>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <>
      <div className="timeline-background">
        <h2 className="timeline-title mb-5">Zaman Çizelgesi</h2>
        <div className="search-filter">
          <p style={{ fontWeight: "bold" }}>
            Arama bölümünü verileri filtrelemek için kullanabilirsiniz.
          </p>
          <FormControl
            type="text"
            placeholder="Anahtar kelime, tarih, başlık veya link araması yapabilirsiniz..."
            value={filterText}
            onChange={handleFilter}
          />
          <Form.Control
            as="select"
            value={selectedYear}
            onChange={handleYearChange}
            
            className="mt-3"
          >
            <option value="">Yıl Seçiniz</option>
            {Array.from({ length: 11 }, (_, i) => 2013 + i).map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Form.Control>
          <Form.Check 
            type="checkbox" 
            label="Yakın tarihten geçmişe doğru sıralama" 
            checked={reverseOrder} 
            onChange={handleReverseOrderChange}
            className="mt-3"
          />
        </div>
        <VerticalTimeline>
          {dataRows.map((row, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "#fff",
                border: "1px solid #ffffff",
                borderRadius: "10px",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #26355D" }}
              date={row[columns[0].name]}
              iconStyle={{
                background: "#26355D",
                color: "#fff",
                width: "30px",
                height: "30px",
                marginLeft: "-15px",
                marginTop: "17px",
              }}
            >
              <h3 className="vertical-timeline-element-title">{row[columns[1].name]}</h3>
              <p>{renderContent(row[columns[2].name])}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Timeline;
