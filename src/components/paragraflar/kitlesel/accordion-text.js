import React from "react";
import { Card, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./kitlesel-text.css";

function AccordionText() {
  const { t } = useTranslation();

  return (
    <Card className="mb-5">
      <Card.Header
        as="h5"
        style={{
          color: "white",
          background: "linear-gradient(to right, #299170, #6DBA91)",
        }}
      >
        {t('accordion.title')}
      </Card.Header>
      <Card.Body>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="custom-accordion-header-kitlesel">
              {t('accordion.section1.title')}
            </Accordion.Header>
            <Accordion.Body className="accordion-body-text-kitlesel">
              <Row>{t('accordion.section1.content')}</Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {t('accordion.section2.title')}
            </Accordion.Header>
            <Accordion.Body className="accordion-body-text-kitlesel">
              <Row>{t('accordion.section2.content')}</Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>{t('accordion.section3.title')}</Accordion.Header>
            <Accordion.Body className="accordion-body-text-kitlesel">
              <Row>{t('accordion.section3.content')}</Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>{t('accordion.section4.title')}</Accordion.Header>
            <Accordion.Body className="accordion-body-text-kitlesel">
              <Row>{t('accordion.section4.content')}</Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default AccordionText;
