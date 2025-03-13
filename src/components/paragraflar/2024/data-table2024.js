import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const DataTable2024 = () => {
  const { t } = useTranslation();

  const data = [
    { name: 'mevlude_goksun', description: 'mevlude_goksun_desc' },
    { name: 'guler_cetinkaya', description: 'guler_cetinkaya_desc' },
    { name: 'ayse_ercengiz', description: 'ayse_ercengiz_desc' },
    { name: 'mine_isiktas', description: 'mine_isiktas_desc' },
    { name: 'ferah_oktan', description: 'ferah_oktan_desc' },
    { name: 'emine_gucluer', description: 'emine_gucluer_desc' },
    { name: 'sema_gokkan', description: 'sema_gokkan_desc' }
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{t('hassasname2024')}</th>
          <th>{t('hassasdescription2024')}</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{ whiteSpace: 'nowrap', verticalAlign: 'middle' }}>{t(item.name)}</td>
            <td>{t(item.description)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable2024;