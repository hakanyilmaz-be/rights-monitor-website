import { Col, Container, Row } from "react-bootstrap";
import backgroundImg from "../assets/img/bg-iskence.png"
import IskenceGiris from "../components/paragraflar/iskence/iskence-giris";
import Yas from "../components/charts/iskence/yas";
import YillarIskence from "../components/charts/iskence/yillar-iskence";
import IskenceYerleri from "../components/charts/iskence/iskence-yerleri";
import IskenceIller from "../components/charts/iskence/iskence-iller";
import AccordionTextIskence from "../components/paragraflar/iskence/accordion-text-iskence";
import AdvancedTableIskence from "../components/charts/iskence/advanced-table-iskence";
import { useTranslation, Trans } from 'react-i18next'; // Çeviri fonksiyonu dahil edildi

const IskencePage = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook

  const divStyle = {
    position: 'relative',
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(64, 70, 243, 0.291)',
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: 2,  
    paddingTop: '3.2rem',
    paddingBottom: '1.2rem',
    paddingLeft: '2.2rem',
    paddingRight: '2.2rem',
  };


  return (
    <>
      <div style={divStyle}>
        <div style={overlayStyle}></div>
        <Container style={contentContainerStyle}>
          <IskenceGiris />
        </Container>
      </div>

      <Container style={contentContainerStyle}>
      <Row>
          <Col lg={12}>
            <p className="small-paragraph">
              {t('iskence_intro_1')}
            </p>
            <p className="small-paragraph">
              {t('iskence_intro_2')}
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={5}>
            <Yas />
          </Col>
          <Col lg={7} className="pl-3">
            <p style={{ paddingTop: "17%" }} className="small-paragraph">
              {t('iskence_summary_1')}
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <p style={{ paddingTop: "9%" }} className="small-paragraph">
            {t('torture_allegations_1')}
            </p>
            <p className="small-paragraph">
            {t('torture_systematic_1')}
            </p>
          </Col>
          <Col lg={5} className="pl-3">
            <YillarIskence />
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <h4 style={{ paddingTop: "2.4%" }}>
            {t('solidarity_survey_title')}
            </h4>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('solidarity_survey_text')}
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={7}>
            <h4 style={{ paddingTop: "2.4%" }}>
            {t('torture_methods_conditions_title')}
            </h4>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('torture_methods_conditions_text')}
            </p>
            <h4 style={{ paddingTop: "2.4%" }}>
            {t('prison_torture_title')}
            </h4>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('prison_torture_text')}.
            </p>
          </Col>
          <Col lg={5} className="pl-3">
            <IskenceYerleri />
          </Col>
          <Col lg={12}>
            <h4 style={{ paddingTop: "2.4%" }}>{t('complaints_legal_processes_title')}</h4>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('complaints_legal_processes_text')}
            </p>
            <h4 style={{ paddingTop: "2.4%" }}>
            {t('government_attitude_toward_torture_title')}
            </h4>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('government_attitude_toward_torture_text_1')}
            </p>
            <p style={{ paddingTop: "1%" }} className="small-paragraph">
            {t('government_attitude_toward_torture_text_2')}
            </p>
          </Col>
        </Row>
        <Row>
        <Col lg={8}>
      <h4 style={{ paddingTop: '2.4%' }}>
        {t('internationalOrganizationsFindings')}
      </h4>

      <p style={{ paddingTop: '2%' }} className="small-paragraph">
        <Trans
          i18nKey="paragraph1"
          components={[
            <a
              href="https://neighbourhood-enlargement.ec.europa.eu/turkiye-report-2023_en"
              target="_blank"
              rel="noopener noreferrer"
            />
          ]}
        />
      </p>

      <p className="small-paragraph">
        {t('paragraph2')}
      </p>

      <p className="small-paragraph">
        <Trans
          i18nKey="paragraph3"
          components={[
            <a
              href="https://tbinternet.ohchr.org/_layouts/15/treatybodyexternal/Download.aspx?symbolno=CAT%2FC%2FTUR%2FCO%2F5&Lang=en"
              target="_blank"
              rel="noopener noreferrer"
            />
          ]}
        />
      </p>
    </Col>
          <Col lg={4} className="pl-3">
            <IskenceIller />
          </Col>
          <Col lg={12}>
      <p style={{ paddingTop: '2%' }} className="small-paragraph">
        {t('paragraph4')}
      </p>
      <p className="small-paragraph">
        {t('paragraph5')}
      </p>
      <h4 style={{ paddingTop: '2.4%' }}>
        {t('assessmentOfPACE')}
      </h4>
      <p className="small-paragraph">
        {t('paragraph6')}
      </p>
      <AccordionTextIskence />
    </Col>
        </Row>

          <AdvancedTableIskence/>
      
      </Container>
    </>
  );
};

export default IskencePage;