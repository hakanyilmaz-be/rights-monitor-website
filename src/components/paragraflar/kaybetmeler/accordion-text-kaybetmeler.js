import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./kaybetmeler-text.css";

function AccordionTextKaybetmeler() {
  const { t } = useTranslation();

  return (
    <div className="kaybetmeler">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-kaybetmeler">
            {t('accordionKaybetmeler.header')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-kaybetmeler">
            <Row>
              <p>
                {t('accordionKaybetmeler.bodyText')}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextKaybetmeler;
