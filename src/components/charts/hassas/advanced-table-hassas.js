import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // useTranslation eklendi
import "./advanced-table-hassas.css";

function AdvancedTableHassas() {
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');
    const { i18n, t } = useTranslation(); // Dil kontrolü ve t fonksiyonu

    useEffect(() => {
        const fetchCSVData = () => {
            // Dil kontrolüne göre doğru CSV URL'si seçilir
            const csvUrl = i18n.language === 'tr'
                ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=496568060&single=true&output=csv"
                : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQG0Gg1TsKyJ7KBwRkN85W23CnmgICsxPnMS8Xy7iGAlnbME8e3Y2L3wCF2rCNZsYK_UPiWZJ3GH2I4/pub?gid=835127655&single=true&output=csv";

            axios.get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);
                });
        };

        fetchCSVData();
    }, [i18n.language]); // Dil değiştiğinde veriler yeniden çekilir

    function parseCSV(csvText) {
        Papa.parse(csvText, {
            complete: (results) => {
                const rows = results.data;
                if (rows.length > 0) {
                    const headers = rows[0];
                    const columnsToShow = [0, 1, 2, 3, 4, 5, 6];

                    const data = rows.slice(1).map(row => {
                        let rowData = {};
                        columnsToShow.forEach((colIndex) => {
                            rowData[headers[colIndex]] = row[colIndex];
                        });
                        return rowData;
                    });

                    const selectedColumns = [
                        {
                            name: headers[0],
                            selector: row => row[headers[0]],
                            sortable: true,
                            wrap: true,
                            grow: 0.3
                        },
                        {
                            name: headers[1],
                            selector: row => row[headers[1]],
                            sortable: true,
                            wrap: true,
                            grow: 0.2
                        },
                        {
                            name: headers[2],
                            selector: row => row[headers[2]],
                            sortable: true,
                            wrap: true,
                            grow: 4
                        },
                        {
                            name: headers[4],
                            selector: row => row[headers[4]],
                            sortable: true,
                            wrap: true,
                            grow: 0.2
                        },
                        {
                            name: headers[5],
                            selector: row => row[headers[5]],
                            sortable: true,
                            wrap: true,
                            grow: 0.5
                        },
                        {
                            name: headers[6],
                            selector: row => row[headers[6]],
                            sortable: true,
                            wrap: true,
                            grow: 0.3
                        },
                        {
                            name: headers[3],
                            selector: row => row[headers[3]],
                            sortable: true,
                            wrap: true,
                            grow: 2.3,
                            cell: row => <a href={row[headers[3]]} target="_blank" rel="noopener noreferrer">{row[headers[3]]}</a>
                        }
                    ];

                    setDataRows(data);
                    setAllData(data);
                    setColumns(selectedColumns);
                }
            }
        });
    }

    const handleFilter = (event) => {
        const value = event.target.value;
        setFilterText(value);
        if (value) {
            const filteredData = allData.filter(item => {
                return Object.keys(item).some(key =>
                    item[key].toString().toLowerCase().includes(value.toLowerCase())
                );
            });
            setDataRows(filteredData);
        } else {
            setDataRows(allData);
        }
    };

    const paginationOptions = {
        rowsPerPageText: t('rows_per_page'), 
        rangeSeparatorText: t('range_separator'), 
        selectAllRowsItemText: t('select_all'), 
    };

    const customStyles = {
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: '#FFB01E',
                color: '#000',
                fontSize: '12px',
            }
        },
        cells: {
            style: {
                padding: '8px',
                fontSize: '11px',
            }
        }
    };

    return (
        <div className="advanced-table-wrapper">
            <p style={{ fontWeight: 'bold' }}>{t('search_instruction')}</p>

            <FormControl
                type="text"
                placeholder={t('search_placeholder')} // Dil bazlı placeholder
                className="mb-3"
                value={filterText}
                onChange={handleFilter}
            />
            <div className="advanced-table-container">
                <DataTable
                    columns={columns}
                    data={dataRows}
                    defaultSortFieldId={1}
                    pagination
                    highlightOnHover
                    responsive
                    striped
                    noDataComponent={<div>{t('loading_data')}</div>} // Dil bazlı yükleme mesajı
                    paginationComponentOptions={paginationOptions}
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
}

export default AdvancedTableHassas;
