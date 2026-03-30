import React from 'react'
import GirisAlani from '../components/charts/resmi-aciklamalar/giris-alani'
import AdvancedTable from '../components/charts/resmi-aciklamalar/advanced-table-resmi'
import { Container } from 'react-bootstrap'

const ResmiAciklamalar = () => {
  return (
    <div>

        <GirisAlani/>

        <AdvancedTable/>


    </div>
  )
}

export default ResmiAciklamalar