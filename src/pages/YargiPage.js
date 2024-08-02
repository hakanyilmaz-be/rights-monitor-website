import { Container } from "react-bootstrap";
import YargiGiris from "../components/paragraflar/yargi/yargi-giris";
import Timeline from "../components/timeline/timeline";
import AccordionTextYargi from "../components/paragraflar/yargi/accordion-text-yargi";

const YargiPage = () => {
  return (
    <>
<div style={{ background: "linear-gradient(to right, #7d3e8c, #ff7e5f)", minHeight: "100vh", paddingTop: "3rem" }}>
<Container>
          <YargiGiris />
          <AccordionTextYargi/>
        </Container>
        <Timeline />
      </div>
    </>
  );
};

export default YargiPage;
