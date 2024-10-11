import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";
import "./teror-data-text.css";

function AccordionTextTerorData() {
  const { t } = useTranslation();

  return (
    <div className="teror-data mt-4">
      <Accordion className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-teror-data">
            {t('accordionc.header1')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <p className="small-paragraph">{t('accordionc.body1.paragraph1')}</p>
              <p className="small-paragraph">{t('accordionc.body1.paragraph2')}</p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header-teror-data">
            {t('accordionc.header2')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <p className="small-paragraph">{t('accordionc.body2.paragraph1')}</p>
              <p className="small-paragraph">{t('accordionc.body2.paragraph2')}</p>
              <p className="small-paragraph">{t('accordionc.body2.paragraph3')}</p>
              <p className="small-paragraph">{t('accordionc.body2.paragraph4')}</p>
              <p className="small-paragraph">{t('accordionc.body2.paragraph5')}</p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="custom-accordion-header-teror-data">
            {t('accordionc.header3')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <p className="small-paragraph">{t('accordionc.body3.paragraph1')}</p>
              <p className="small-paragraph">{t('accordionc.body3.paragraph2')}</p>
              <p className="small-paragraph">{t('accordionc.body3.paragraph3')}</p>
              <p className="small-paragraph">{t('accordionc.body3.paragraph4')}</p>
              <p className="small-paragraph">{t('accordionc.body3.paragraph5')}</p>
              <p className="small-paragraph">{t('accordionc.body3.paragraph6')}</p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="custom-accordion-header-teror-data">
            {t('accordionc.header4')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <p className="small-paragraph">{t('accordionc.body4.paragraph1')}</p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className="custom-accordion-header-teror-data">
            {t('accordionc.header5')}
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-teror-data">
            <Row>
              <ul className="small-paragraph">
                <li>{t('accordionc.body5.item1')}</li>
                <li>{t('accordionc.body5.item2')}</li>
                <li>{t('accordionc.body5.item3')}</li>
                <li>{t('accordionc.body5.item4')}</li>
                <li>{t('accordionc.body5.item5')}</li>
                <li>{t('accordionc.body5.item6')}</li>
                <li>{t('accordionc.body5.item7')}</li>
                <li>{t('accordionc.body5.item8')}</li>
                <li>{t('accordionc.body5.item9')}</li>
                <li>{t('accordionc.body5.item10')}</li>
                <li>{t('accordionc.body5.item11')}</li>
                <li>{t('accordionc.body5.item12')}</li>
              </ul>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionTextTerorData;
