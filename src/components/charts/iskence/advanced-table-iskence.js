import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next'; // i18n import edildi
import "./advanced-table-iskence.css"

function AdvancedTableIskence() {
    const { t, i18n } = useTranslation(); // useTranslation hook'u kullanıldı
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl = i18n.language === 'en'
                ? "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=1090727120&single=true&output=csv"
                : "https://docs.google.com/spreadsheets/d/e/2PACX-1vQnrzRsUQKJD85npWmnecHjJzgsYHlBBLXPoui4avcXqWJQTP_vG8XbDkP3tbkJ50iv5pW27D1n1xEe/pub?gid=0&single=true&output=csv";
            axios.get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);
                });
        };

        fetchCSVData();
    }, [i18n.language]);

    function parseCSV(csvText) {
        Papa.parse(csvText, {
            complete: (results) => {
                const rows = results.data;
                if (rows.length > 0) {
                    const headers = rows[0];
                    const columnsToShow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

                    const data = rows.slice(1).map(row => {
                        let rowData = {};
                        columnsToShow.forEach((colIndex) => {
                            rowData[headers[colIndex]] = row[colIndex];
                        });
                        return rowData;
                    });

                    // const selectedColumns içeriği aynen korundu
                    const selectedColumns = [
                        {
                            name: headers[0],
                            selector: row => row[headers[0]],
                            sortable: true,
                            wrap: true,
                            grow: 0.4
                        },
                        {
                            name: headers[1],
                            selector: row => row[headers[1]],
                            sortable: true,
                            wrap: true,
                            grow: 0.1
                        },
                        {
                            name: headers[2],
                            selector: row => row[headers[2]],
                            sortable: true,
                            wrap: true,
                            grow: 0.2
                        },
                        {
                            name: headers[3],
                            selector: row => row[headers[3]],
                            sortable: true,
                            wrap: true,
                            grow: 0.5
                        },
                        {
                            name: headers[4],
                            selector: row => row[headers[4]],
                            sortable: true,
                            wrap: true,
                            grow: 0.5
                        },
                        {
                            name: headers[5],
                            selector: row => row[headers[5]],
                            sortable: true,
                            wrap: true,
                            grow: 0.5
                        },
                        {
                            name: headers[7],
                            selector: row => row[headers[7]],
                            sortable: true,
                            wrap: true,
                            grow: 3,
                            cell: (row) => <ExpandableCell data={row[headers[7]]} />
                        },
                        {
                            name: headers[8],
                            selector: row => row[headers[8]],
                            sortable: true,
                            wrap: true,
                            grow: 2,
                            cell: row => <a href={row[headers[8]]} target="_blank" rel="noopener noreferrer">{row[headers[8]]}</a>
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
                    item[key] && item[key].toString().toLowerCase().includes(value.toLowerCase())
                );
            });
            setDataRows(filteredData);
        } else {
            setDataRows(allData);
        }
    };

    const paginationOptions = {
        rowsPerPageText: t('rowsPerPageText'),
        rangeSeparatorText: t('rangeSeparatorText'),
        selectAllRowsItemText: t('selectAllRowsItemText')
    };

    const customStyles = {
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: '#5f3df8',
                color: '#FFF',
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
            <p style={{ fontWeight: 'bold' }}>{t('searchInstruction')}</p>

            <FormControl
                type="text"
                placeholder={t('searchPlaceholder')}
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
                    noDataComponent={<div>{t('loadingData')}</div>}
                    paginationComponentOptions={paginationOptions}
                    customStyles={customStyles}
                />
            </div>
        </div>
    );
}

function ExpandableCell({ data }) {
    const { t } = useTranslation(); // useTranslation hook'u kullanıldı
    const [expand, setExpand] = useState(false);
    const preview = data ? `${data.substring(0, 200)}...` : '';

    return (
        <div>
            {expand ? data : preview}
            <button onClick={() => setExpand(!expand)} style={{ marginLeft: '5px', cursor: 'pointer', color: 'blue', textDecoration: 'underline', border: 'none', background: 'none' }}>
                {expand ? t('showLess') : t('readMore')}
            </button>
        </div>
    );
}

export default AdvancedTableIskence;