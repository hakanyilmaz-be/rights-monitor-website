import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../components/side-bar/side-bar';
import "./admin-template.css";

const AdminTemplate = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSidebar(true);
    }, 8000); // 8 saniye sonra sidebar görünür

    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  return (
    <div className="admin-template">
      <Row className='admin-row'>
        <Col
          lg={showSidebar ? 3 : 0}
          className={`sidebar sticky-top ${showSidebar ? 'sidebar-visible' : 'sidebar-hidden'}`}
        >
          {showSidebar && <SideBar />}
        </Col>
        <Col lg={showSidebar ? 9 : 12} className="content-column">
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default AdminTemplate;
