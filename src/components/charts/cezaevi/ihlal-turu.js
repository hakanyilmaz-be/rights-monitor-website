import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next kullanımı
import './cezaevi-charts.css';

const IhlalTuru = () => {
    const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = i18n.language === 'en'
                ? 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=1012970602&single=true&output=csv'
                : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQzCf-jQLEF_RoHvD_LqLKM1GWgZnXhcXq5QHhAAdUMoLCTk3SsgSg6VLrPYVFQnKSFR1y227F7iA5P/pub?gid=2040066483&single=true&output=csv';
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(5, 35)); 
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, [i18n.language]); // Dil değiştiğinde yeniden veri çekmek için i18n.language eklendi

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const columns = [
        { name: t('violation'), selector: row => row[0], sortable: true, grow: 1 },
        { name: t('violationCount'), selector: row => row[1], sortable: true, grow: 0.5 },
    ];

    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'), 
        rangeSeparatorText: t('rangeSeparatorText'),
        selectAllRowsItemText: t('selectAllRowsItemText')
    };

    const customStyles = {
        rows: {
            style: {
              minHeight: "24px", // Satır yüksekliğini küçült
            },
        },
        headCells: {
            style: {
                padding: '4px 0px 4px 4px', // Hücre içi boşlukları azalt
                background: 'linear-gradient(to right, #04314f, #124d74 )',
                color: '#FFF', // Beyaz yazı
                fontSize: '10px', // Font boyutunu küçült
            },
        },
        cells: {
            style: {
                padding: '2px 2px 2px 4px', 
                fontSize: '8px', 
            },
        },
    };

    return (
        <div className='table-container'>
            <p style={{ fontWeight: 'bold' }}>{t('prisonViolationsTypes')}</p>
            <DataTable
                columns={columns}
                data={dataRows}
                pagination
                highlightOnHover
                striped
                noDataComponent={<div>{t('loadingData')}</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
            />
        </div>
    );
}

export default IhlalTuru;
