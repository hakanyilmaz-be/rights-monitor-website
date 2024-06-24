import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../components/side-bar/side-bar';
import "./admin-template.css";

const AdminTemplate = ({ children }) => {
  return (
    <div className="admin-template">
      <Row className='admin-row'>
        <Col lg={3} className='sidebar sticky-top'>
          <SideBar />
        </Col>
        <Col lg={9}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default AdminTemplate;
