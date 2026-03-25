import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import backgroundImg from "../assets/img/bg-report.png";
import './Raporlar.css';
import { useTranslation } from "react-i18next";  



const Raporlar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 

const reports = t('reports', { returnObjects: true });

  
    const divStyle = {

    };
  
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
    };
  
    const contentContainerStyle = {
      position: 'relative',
      zIndex: 2,  
      paddingTop: '3.2rem',
      paddingBottom: '1.2rem',
      paddingLeft: '2.2rem',
      paddingRight: '2.2rem',
    };
  

  return (
    <>

      <div
        className="raporlar-hero text-white py-5"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Container>

        <div style={divStyle}>
        <div style={overlayStyle}></div>
        <Container style={contentContainerStyle}>
         <motion.h1
              className="display-4 fw-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             {t('pageTitleR')}
            </motion.h1>
            <motion.p
              className="lead text-light mt-4"
              style={{fontSize: "0.9rem", paddingRight: "50px"}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
                {t('pageDescriptionR')}
            </motion.p>
        </Container>
      </div>

         
        </Container>
      </div>

     
      <div className="bg-white py-5">
        <Container>
        <Row className="g-4" style={{paddingLeft: "1rem", paddingRight: "2rem"}}>
          {reports.map((report, idx) => (
            <Col key={idx} md={6}>
              <motion.div
                className="rapor-card h-100"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="gradient-border rounded-4 h-100 p-1"
                  style={{
                    background: 'linear-gradient(135deg, #f44336, #ffa726, #fb8c00)',
                    padding: '2px',
                    borderRadius: '1rem'
                  }}
                >
                  <Card className="h-100 text-dark border-0 rounded-4">
                    <Card.Body className="d-flex flex-column justify-content-between p-4">
                      <div>
                        <Card.Title className="fs-4 fw-bold text-dark mb-3">
                          {report.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                          {report.description}
                        </Card.Text>
                      </div>
                      <div className="text-end mt-4">
          <div
          style={{
            display: 'inline-block',
            padding: '2px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #ffa726, #fb8c00, #f44336)'
          }}
        >
          <button
            onClick={() => navigate(report.link)}
            className="btn btn-light btn-sm rounded-pill px-4 py-2 border-0 gradient-button"
            style={{ background: '#fff', borderRadius: '999px', transition: 'all 0.3s ease' }}
          >
            {t('buttonLabelR')}
          </button>
        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
        </Container>
      </div>
    </>
  );
};

export default Raporlar;
