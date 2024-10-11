import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./sinirdisi-text.css";

function AccordionTextIade() {
  const { t } = useTranslation(); // Çeviri hook'u

  return (
    <div className="sinirdisi">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-olumler">
            {t('methodology')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-olumler">
            <Row>
              <p className="small-paragraph">
                {t('iade_methodology_description')}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextIade;
