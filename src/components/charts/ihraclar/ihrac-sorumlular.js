import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown, FormControl } from 'react-bootstrap';
import './ihrac-sorumlular.css';  // Custom CSS dosyası

const IhracSorumlular = () => {
    const [dataRows, setDataRows] = useState([]);
    const [selectedSorumlu, setSelectedSorumlu] = useState(null);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        const fetchCSVData = async () => {
            const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTjWrsx_6YGQEjGDbWCWAn-xsDos5nZZ8sMu9GrEuVZW9bSMh25GSCMHHmra_aKkAZXGwWgvuN50xMG/pub?gid=1944929832&single=true&output=csv";
            try {
                const response = await axios.get(csvUrl);
                const parsedData = parseCSV(response.data);
                setDataRows(parsedData.slice(468, 545));
            } catch (error) {
                console.error('Error fetching CSV data:', error);
            }
        };

        fetchCSVData();
    }, []);

    const parseCSV = (csvText) => {
        const rows = csvText.split(/\r?\n/).map(row => row.split(',').map(cell => cell.trim()));
        return rows;
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredOptions = dataRows.filter(row =>
        row[0].toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleSelectChange = (sorumlu) => {
        const selectedOption = dataRows.find(row => row[0] === sorumlu);
        setSelectedSorumlu(selectedOption);
    };

    return (
        <div>
            <h2>İhraç listelerinde imzası olan sorumlular</h2>
            <Dropdown>
                <Dropdown.Toggle className="custom-dropdown-toggle" id="dropdown-basic">
                    Sorumlu seçin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <FormControl
                        autoFocus
                        placeholder="Arama yapın..."
                        onChange={handleSearchInputChange}
                        value={searchInput}
                    />
                    {filteredOptions.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => handleSelectChange(option[0])}
                        >
                            {option[0]}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            {selectedSorumlu && (
                <div style={styles.selectedInfo}>
                    <span style={styles.selectedLabel}>{selectedSorumlu[0]}:</span>
                    <span style={styles.responsibilityCount}>{selectedSorumlu[1]} kişi</span>
                </div>
            )}
        </div>
    );
};

const styles = {
    selectedInfo: {
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    selectedLabel: {
        fontWeight: 'bold',
        marginRight: '5px',
    },
    responsibilityCount: {
        backgroundColor: '#FFD700',
        padding: '2px 6px',
        borderRadius: '4px',
    }
};

export default IhracSorumlular;




