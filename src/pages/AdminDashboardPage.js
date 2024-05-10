import { Col, Container, Row } from "react-bootstrap";
import FetchCSVData from "../components/charts/fetchCSVData";
import HeaderKitlesel from "../components/text-header/headerKitlesel";
import FlourishEmbedKitlesel from "../components/flourish/FlourishEmbedKitlesel";
import KitleselGiris from "../components/paragraflar/kitlesel/kitlesel-giris";
import KitleselIller from "../components/charts/kitlesel/kitlesel-iller";
import IllerAciklama from "../components/paragraflar/kitlesel/iller-aciklama";
import YillarAciklama from "../components/paragraflar/kitlesel/yillar-aciklama";
import KitleselYillarGrafik from "../components/charts/kitlesel/kitlesel-yillar";
import LookerStudioIframeKitlesel from "../components/locker-studio/locker-studio-iframe-kitlesel";
import Sorumlular from "../components/paragraflar/kitlesel/sorumlular";
import SorumlularDevam from "../components/paragraflar/kitlesel/sorumlular-devami";
import AccordionText from "../components/paragraflar/kitlesel/accordion-text";
import AdvancedTable from "../components/charts/kitlesel/advanced-table";

const AdminDashboardPage = () => {
  return (
    <Container>
      <HeaderKitlesel />
      <FlourishEmbedKitlesel />
      <div style={{ height: "30px" }}></div>
      <KitleselGiris />
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={5}>
          <KitleselIller />
        </Col>
        <Col lg={7} className="pl-3">
          <IllerAciklama />
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={6}>
         <YillarAciklama/>
        </Col>
        <Col lg={6} className="pl-3">
        <KitleselYillarGrafik/>
        </Col>
      </Row>
      <div style={{ height: "50px" }}></div>

      <Row>
        <Col lg={5}>
         <LookerStudioIframeKitlesel/>
        </Col>
        <Col lg={7}>
        <Sorumlular/>
        </Col>
        <Col lg={12}>
        <SorumlularDevam/>
        </Col>
      </Row>

      <div style={{ height: "30px" }}></div>
      <AccordionText/>
    <AdvancedTable/>
      <div style={{ height: "700px" }}></div>

      <FetchCSVData />
    </Container>
  );
};

export default AdminDashboardPage;
