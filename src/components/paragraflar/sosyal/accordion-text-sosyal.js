import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./sosyal-text.css";

function AccordionTextSosyal() {
  const { t } = useTranslation();

  return (
    <div className="sosyal">
      <Accordion defaultActiveKey="0" className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-sosyal">
            {t("accordionTextSosyal.title")}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-sosyal">
            <Row>
              <p className="small-paragraph">
                {t("accordionTextSosyal.body")}
              </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextSosyal;
