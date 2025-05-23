import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { useTranslation } from 'react-i18next'; // Çeviri için i18next kullanımı

const Yasam20241 = () => {
    const { t, i18n } = useTranslation(); // Çeviri fonksiyonunu kullanmak için
    const [dataRows, setDataRows] = useState([]);

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = i18n.language === 'en' 
                ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vTS2JSKDDtUeidvgcs_Goo9Uk6dWx1s0CX3slBzDFSyLv-gAMazOD9TO-PIN1f5PO9szvhBzHQV8tGX/pub?gid=2074489724&single=true&output=csv"
                : "https://docs.google.com/spreadsheets/d/e/2PACX-1vTS2JSKDDtUeidvgcs_Goo9Uk6dWx1s0CX3slBzDFSyLv-gAMazOD9TO-PIN1f5PO9szvhBzHQV8tGX/pub?gid=1728857455&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(1, 5)); 
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, [i18n.language]); 

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const columns = [
        { name: t('gender2024'), selector: row => row[0], sortable: true, grow: 1 },
        { name: t('numberOfGender2024'), selector: row => row[1], sortable: true, grow: 1 },
    ];
    

    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'), 
        rangeSeparatorText: t('rangeSeparatorText'),
        //selectAllRowsItem: true,
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
                padding: '0px 0px 0px 8px', 
                fontSize: '11px', 
            },
        },
    };

    return (
        <div>
            <p style={{ fontWeight: 'bold' }}>{t('countOfGender2024')}</p>
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

export default Yasam20241;
