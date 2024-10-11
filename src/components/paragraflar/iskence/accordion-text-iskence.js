import React from 'react';
import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from 'react-i18next'; // i18n import edildi
import "./iskence-text.css";

function AccordionTextIskence() {
  const { t } = useTranslation(); // useTranslation hook'u kullanıldı

  return (
    <div className="iskence">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-iskence">
            {t('methodologyi')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-iskence">
            <Row>
              <p>
                {t('methodologyParagraph1')}
              </p>
              <p>
                {t('methodologyParagraph2')}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextIskence;
