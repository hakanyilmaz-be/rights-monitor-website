import React from "react";
import { Card, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next"; // i18next kullanımı
import "./yargi-text.css";

function AccordionTextYargi() {
  const { t } = useTranslation(); // Çeviri fonksiyonunu alıyoruz

  return (
    <div className="yargi">
      <Card className="mb-4 mt-5">
        <Card.Header
          as="h5"
          style={{
            color: "white",
            background: "linear-gradient(to right, #b1170c, #e55d53)",
          }}
        >
          {t('yargi.accordionTitle')} {/* Başlık çevirisi */}
        </Card.Header>
        <Card.Body>
          <Accordion defaultActiveKey="">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="custom-accordion-header-yargi">
                {t('yargi.accordion1Title')} {/* İlk Accordion başlığı */}
              </Accordion.Header>
              <Accordion.Body className="accordion-body-text-yargi">
                <Row>
                  <p className="small-paragraph">{t('yargi.accordion1Text1')}</p>
                  <p className="small-paragraph">{t('yargi.accordion1Text2')}</p>
                  <p className="small-paragraph">{t('yargi.accordion1Text3')}</p>
                  <p className="small-paragraph">{t('yargi.accordion1Text4')}</p>
                  <p className="small-paragraph">{t('yargi.accordion1Text5')}</p>
                  <p className="small-paragraph">{t('yargi.accordion1Text6')}</p>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="custom-accordion-header-yargi">
                {t('yargi.accordion2Title')} {/* İkinci Accordion başlığı */}
              </Accordion.Header>
              <Accordion.Body className="accordion-body-text-yargi">
                <Row>
                  <p className="small-paragraph">{t('yargi.accordion2Text1')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text2')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text3')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text4')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text5')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text6')}</p>
                  <p className="small-paragraph">{t('yargi.accordion2Text7')}</p>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AccordionTextYargi;
