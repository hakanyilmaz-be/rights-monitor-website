import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from 'react-data-table-component';
import { Trans, useTranslation } from 'react-i18next'; // i18n import edildi
import "./iskence-text.css";

const IskenceGiris = () => {
    const { t } = useTranslation(); // i18n kullanımı
    const [a5Value, setA5Value] = useState("");
    const [a6Value, setA6Value] = useState("");
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 6)); 
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, []);

    useEffect(() => {
        const fetchCSVData = () => {
          const csvUrl =
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1306632659&single=true&output=csv";
          axios
            .get(csvUrl)
            .then((response) => {
              const data = parseCSV(response.data);
              if (data.length > 0) {
                setA5Value(data[2][12]);
              }
              if (data.length > 0) {
                setA6Value(data[2][13]);
              }
            })
            .catch((error) => {
              console.error("Error fetching CSV data:", error);
            });
        };
    
        fetchCSVData();
      }, []);
    

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const columns = [
        { name: t('gender'), selector: row => row[0], sortable: true, grow: 1 },
        { name: t('numberOfVictims'), selector: row => row[1], sortable: true, grow: 1 },
    ];


    const customStyles = {
        rows: {
            style: {
              minHeight: "30px", 
            },
          },
        headCells: {
            style: {
                padding: '8px 0px 8px 12px',
                background: '#5f3df8',
                color: '#FFF',
                fontSize: '15px', 
            },
        },
        cells: {
            style: {
                padding: '0px 0px 0px 12px', 
                fontSize: '11px', 
         
            },
        },
    };

  return (
    <Container
      fluid
      className=" d-flex justify-content-center align-items-center ilk-giris"
    >
      <Row className="justify-content-center align-items-center">
        <Col lg={6} className="text-start">
          <h1 className="text-white fw-bold mt-5" style={{ fontSize: "2.5rem" }}>
            {t('titlei')}
          </h1>
          <p className="small-paragraph text-white">
            {t('paragraph1i')}
          </p>
          <p className="small-paragraph text-white">
            <Trans
              i18nKey="paragraph2i"
              values={{ a5Value, a6Value }}
              components={{ span: <span style={{ color: "#ffd87c" }} /> }}
            />
          </p>
        </Col>
        <Col
          lg={1}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
        ></Col>
        <Col
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
          style={{ height: "40vh" }}>
          <DataTable
            columns={columns}
            data={dataRows}
            highlightOnHover
            striped
            noDataComponent={<div>{t('loadingData')}</div>}
            customStyles={customStyles}
          />

        </Col>
        <Col
          lg={1}
          className="d-flex flex-column justify-content-center align-items-center desktop-margin-top"
        ></Col>
      </Row>
    </Container>
  );
};

export default IskenceGiris;
