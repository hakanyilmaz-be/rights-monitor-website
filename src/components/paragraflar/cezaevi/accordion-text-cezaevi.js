import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./cezaevi-text.css";

function AccordionTextCezaevi() {
  const { t } = useTranslation();

  return (
    <div className="cezaevi">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-cezaevi">
            {t("accordionTextCezaevi.methodology")}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-cezaevi">
            <Row>
              <p className="small-paragraph"> 
                {t("accordionTextCezaevi.bodyText")}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextCezaevi;
