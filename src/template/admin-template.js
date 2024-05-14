import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SideBar from '../components/side-bar/side-bar'
import "./admin-template.css"
//import TopBar from '../components/header/top-bar'
//import Spacer from '../components/spacer/Spacer'

const AdminTemplate = ( {children}) => {

  return (
    <div className="admin-template">
        <Row className='admin-row'>
            <Col lg={3} className= 'sidebar sticky-top'>
                <SideBar/>
            </Col>
            <Col lg={9}>
                {/* <TopBar/> 
                <Spacer/>*/}
                {children}
            </Col>
        </Row>
    </div>
  )
}

export default AdminTemplate