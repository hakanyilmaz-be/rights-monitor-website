import React from 'react'
import Slide from '../components/slide/slide'
import Slide2 from '../components/slide/Slide2'
import { Col, Container, Image, Row } from 'react-bootstrap'
import rightsMonitorImage from "../assets/img/rights-monitor.jpg"
import AnasayfaHeader from '../components/ana-sayfa-header/anasayfaHeader'
import './AnaSayfa.css'
import AnasayfaIntro from '../components/text-header/anasayfa-intro'
import TarihselAciklama from '../components/paragraflar/anasayfa/tarihsel-aciklama'
import TarihselResim from '../components/paragraflar/anasayfa/tarihsel-resim'
import TarihselDevami from '../components/paragraflar/anasayfa/tarihsel-devami'
import AnasayfaKitlesel from '../components/paragraflar/anasayfa/anasayfa-kitlesel'
import AnasayfaOlumler from '../components/paragraflar/anasayfa/anasayfa-olumler'
import YillarGrafik from '../components/charts/olumler/yillar-grafik'
import AnasayfaHassas from '../components/paragraflar/anasayfa/anasayfa-hassas'
import "../components/paragraflar/anasayfa/anasayfa-text.css"
import AnasayfaKaybetmeler from '../components/paragraflar/anasayfa/anasayfa-kaybetmeler'
import AnasayfaIhraclar from '../components/paragraflar/anasayfa/anasayfa-ihraclar'
import AnasayfaKacirilmalar from '../components/paragraflar/anasayfa/anasayfa-kacirilmalar'

const AnaSayfa = () => {
  return (
    <div>
      <div className="image-header-container">
        <Image src={rightsMonitorImage} fluid className="centered-image" />
        <div className="centered-header2">
        <AnasayfaIntro/>
        </div>

        <div className="centered-header">
          <AnasayfaHeader />
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      
      <Container style={{paddingLeft:"5%", paddingRight:"5%"}}>

      <TarihselAciklama/>

      </Container>
      <div style={{ height: "50px" }}></div>

      <TarihselResim/>
      <div style={{backgroundColor:"#262626"}}>
      <Container style={{padding:"7%"}}>
        <TarihselDevami/>

      </Container>
      </div>
      <Container style={{padding:"7%"}}>
        <AnasayfaKitlesel/>
      </Container>

      <Container style={{paddingLeft:"5%", paddingRight:"5%"}}>
        <Row>
        <h2  className="text-center gradient-text mb-4" style={{ fontSize: "2.7rem" }}>Yaşam Hakkı İhlalleri</h2>

          <Col lg={4}>
          <AnasayfaOlumler/>
          </Col>
          <Col lg={8}>
          <YillarGrafik/>
        </Col>
        </Row>
      </Container>
      <div  style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="mask-overlay"></div>
      <div style={{backgroundColor:"#262626"}}>
      <Container style={{padding:"7%"}}>
      <AnasayfaHassas/>
      </Container>
      </div>
      </div>

      <Container style={{padding:"7%"}}>
        <AnasayfaKaybetmeler/>
      <div style={{ height: "50px" }}></div>

      <AnasayfaKacirilmalar/>
      </Container>

      <div  style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="mask-overlay"></div>
      <div style={{backgroundColor:"#262626"}}>
      <Container style={{padding:"7%"}}>
      <AnasayfaIhraclar/>

      </Container>
      </div>
      </div>


    {/*   <div style={{ height: "20px" }}></div>
      <Slide />
      <div style={{ height: "10px" }}></div>
      <Slide2 /> */}
    </div>
  )
}

export default AnaSayfa
