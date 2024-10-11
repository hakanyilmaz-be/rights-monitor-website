import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./hassas-text.css";
import { useTranslation } from "react-i18next"; // Çok dillilik desteği için

function AccordionHassas() { 
  const { t } = useTranslation(); // useTranslation hook'u ile çok dillilik desteği sağlanıyor

  return (
    <div className="hassas">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-hassas">
            {t('methodology')} {/* Metodoloji başlığı */}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-hassas">
            <Row>
              <p className="small-paragraph">
                {t('hassas_methodology_paragraph_1')} {/* İlk paragraf */}
              </p>
              <p className="small-paragraph">
                {t('hassas_methodology_paragraph_2')} {/* İkinci paragraf */}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionHassas;
