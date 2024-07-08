import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import { FormControl } from 'react-bootstrap';
import "./advanced-table-ihraclar.css"

function AdvancedTableIhraclar() {
    const [dataRows, setDataRows] = useState([]);
    const [allData, setAllData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        const fetchCSVData = () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=0&single=true&output=csv";

            axios.get(csvUrl)
                .then((response) => {
                    parseCSV(response.data);
                })
                .catch(error => {
                    console.error('Error fetching CSV data:', error);
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
                    const columnsToShow = [0, 1, 2, 3];

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
                            grow: 1
                        },
                        {
                            name: headers[1],
                            selector: row => row[headers[1]],
                            sortable: true,
                            wrap: true,
                            grow: 1.4
                        },
                        {
                            name: headers[2],
                            selector: row => row[headers[2]],
                            sortable: true,
                            wrap: true,
                            grow: 1
                        },
                       
                        {
                            name: headers[3],
                            selector: row => row[headers[3]],
                            sortable: true,
                            wrap: true,
                            grow: 1.4
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
        rowsPerPageText: 'Satır Sayısı:',
        rangeSeparatorText: 'ile',
        selectAllRowsItemText: 'Tümünü Göster'
    };

    const customStyles = {
        headCells: {
            style: {
                padding: '8px 0px 8px 8px',
                background: '#331374',
                color: '#fff',
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
     <p style={{ fontWeight: 'bold' }}>Arama bölümünü verileri filtrelemek için kullanılabilirsiniz.</p>

            <FormControl
                type="text"
                placeholder="Arama yap..."
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
                noDataComponent={<div>Veri yükleniyor ...</div>}
                paginationComponentOptions={paginationOptions}
                customStyles={customStyles}
            />
            </div>
        </div>
    );
}

/* function ExpandableCell({ data }) {
    const [expand, setExpand] = useState(false);
    const preview = `${data.substring(0, 170)}...`;

    return (
        <div>
            {expand ? data : preview}
            <button onClick={() => setExpand(!expand)} style={{ marginLeft: '5px', cursor: 'pointer', color: 'blue', textDecoration: 'underline', border: 'none', background: 'none' }}>
                {expand ? 'Daha az göster' : 'Daha fazla oku'}
            </button>
        </div>
    );
} */

export default AdvancedTableIhraclar;
