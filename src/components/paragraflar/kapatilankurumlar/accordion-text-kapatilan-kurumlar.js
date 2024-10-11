import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./kapatilan-text.css";
import { useTranslation } from "react-i18next"; // i18next kullanımı

function AccordionTextKapatilanKurumlar() {
  const { t } = useTranslation(); // useTranslation hook

  return (
    <div className="kapatilan-kurumlar">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-kapatilan-kurumlar">
            {t('kapatilanKurumlarMethodologyHeader')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-kapatilan-kurumlar">
            <Row>
              <p className="small-paragraph">
                {t('kapatilanKurumlarMethodologyText')}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextKapatilanKurumlar;
