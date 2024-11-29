import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SideBar from '../components/side-bar/side-bar';
import "./admin-template.css";
import { useLocation } from 'react-router-dom';
import HamburgerMenu from '../components/hamburger-menu/hamburger-menu';

const AdminTemplate = ({ children }) => {
  const { pathname } = useLocation();

  
  const isLargeScreen = window.innerWidth >= 992; 
  const isHomePage = pathname === '/tr' || pathname === '/en'; 

  return (
    <div className="admin-template">

      <Row className='admin-row'>
  

        {!(isHomePage && isLargeScreen) && ( 
          <Col lg={3} className='sidebar sticky-top'>
            <SideBar />
          </Col>
        )}
        <Col lg={isHomePage && isLargeScreen ? 12 : 9}>
          {children}
        </Col>
      </Row>
    </div>
  );
}

export default AdminTemplate;
