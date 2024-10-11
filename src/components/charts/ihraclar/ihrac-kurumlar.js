import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next kullanımı
import "./ihrac-charts.css"

const IhracKurumlar = () => {
    const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = i18n.language === 'en'
                ? 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRFgMmG6_Cq0etBcOd7GcbNUn-sC5IlqvEPap6LIf7ELoFdPMxVmaKFvr3iLd0TCNpl-nP9Bs9bGjRU/pub?gid=1057017249&single=true&output=csv'
                : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv';
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(246, 464)); 
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
        { name: t('institution'), selector: row => row[0], sortable: true, grow: 2 },
        { name: t('numberOfDismissals'), selector: row => row[1], sortable: true, grow: 1 },
    ];
    
    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'), 
        rangeSeparatorText: t('rangeSeparatorText'),
        selectAllRowsItemText: t('selectAllRowsItemText')
    };

    const customStyles = {
        rows: {
            style: {
              minHeight: "36px", // Satır yüksekliği
            },
          },
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: 'linear-gradient(to right, #27154c, #331374 )',
                color: '#FFF', // Beyaz yazı
                fontSize: '12px', 
            },
        },
        cells: {
            style: {
                padding: '4px 4px 4px 8px', 
                fontSize: '10px',
                whiteSpace: 'normal', 
                overflow: 'visible', 
            },
        },
    };

    return (
        <div className='tablo'>
            <p style={{ fontWeight: 'bold' }}>{t('dismissalsByInstitution')}</p>
            <DataTable
                columns={columns}
                data={dataRows}
                pagination
                highlightOnHover
                striped
                noDataComponent={<div>{t('loadingData')}</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
                responsive
            />
        </div>
    );
}

export default IhracKurumlar;
