import React from "react";
import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./olumler-text.css";
import { useTranslation } from "react-i18next";

function AccordionTextOlumler() {
  const { t } = useTranslation(); 

  return (
    <div className="olumler">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-olumler">
            {t('methodology')} 
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-olumler">
            <Row>
              <p>
                {t('methodology_text1')} 
              </p>
              <p>
                {t('methodology_text2')} 
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextOlumler;
