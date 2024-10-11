import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from 'react-i18next'; // Çeviri için ekleme
import "./ihraclar-text.css";

function AccordionTextIhraclar() {
  const { t } = useTranslation(); // Çeviri için hook kullanımı

  return (
    <div className="ihraclar">
      <Accordion defaultActiveKey="0" className="mb-5 ">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-ihraclar">
            {t('methodology')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-ihraclar">
            <Row>
              <p className="small-paragraph">
                {t('data_based_on_official_gazette')}
              </p>
              <p className="small-paragraph">
                {t('excluded_50k_people')}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextIhraclar;
