import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import DataTable from 'react-data-table-component';

const KurumlarGrafik = () => {
    const { t, i18n } = useTranslation(); // Dil tespiti için i18n eklendi
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const turkishUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ7luwTsBBVIPJbcS195bFfU6JMnKvuMCxn3YdGUJBQU9rXsNg9Xi6PYw_WLTwGGG4L4VZBh2sEBtM/pub?gid=303660759&single=true&output=csv";
            const englishUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZ7luwTsBBVIPJbcS195bFfU6JMnKvuMCxn3YdGUJBQU9rXsNg9Xi6PYw_WLTwGGG4L4VZBh2sEBtM/pub?gid=1065702271&single=true&output=csv";
            const csvUrl = i18n.language === 'en' ? englishUrl : turkishUrl;
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(2, 18));
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, [i18n.language]); // Dil değişikliğinde veri çekmek için i18n.language eklendi

    const parseCSV = (csvText) => {
        const rows = csvText
            .split(/\r?\n/)
            .map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const columns = [
        { name: t('institution_type'), selector: row => row[0], sortable: true, grow: 2 },
        { name: t('closed_institution_count'), selector: row => row[1], sortable: true, grow: 2 },
    ];

    const customStyles = {
        rows: {
            style: {
                minHeight: "36px",
            },
        },
        headCells: {
            style: {
                padding: '8px 0px 8px 12px',
                background: '#231b1b',
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
        <div>
            <DataTable
                columns={columns}
                data={dataRows}
                highlightOnHover
                striped
                noDataComponent={<div>{t('loading_data')}</div>}
                customStyles={customStyles}
            />
        </div>
    );
}

export default KurumlarGrafik;
