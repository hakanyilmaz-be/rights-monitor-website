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
import AnasayfaSosyal from '../components/paragraflar/anasayfa/anasayfa-sosyal'
import AnasayfaCezaevi from '../components/paragraflar/anasayfa/anasayfa-cezaevi'
import HakIhlaliYillar from '../components/charts/cezaevi/hak-ihlali-yillar'
import KurumlarAciklama from '../components/paragraflar/kapatilankurumlar/kurumlar-aciklama'
import KurumlarGrafik from '../components/charts/kapatilan/kurumlar-grafik'
import AnasayfaTypewriterText from '../components/paragraflar/anasayfa/anasayfa-type-writer-text'
import AnasayfaIstatistik from '../components/paragraflar/anasayfa/anasayfa-istatistik'
import { useNavigate } from 'react-router-dom';

const AnaSayfa = () => {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate('/cezaevi-hak-ihlali');
  };

  const handleButtonClick2 = () => {
    navigate('/kapatilankurumlar');
  };

  const handleButtonClick3 = () => {
    navigate('/teror-sucu-istatistikleri');
  };

  const handleButtonClick4 = () => {
    navigate('/yargi-bagimsizligi');
  };





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
      <div className="lg-only" style={{ height: "50px" }}></div>

      
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
      <div style={{ height: "90px" }}></div>
        <AnasayfaSosyal/>
      </Container>
      </div>
      </div>
      <Container style={{padding:"7%"}}>
       <AnasayfaCezaevi/>
       <HakIhlaliYillar/>
       <div class="buttons">
    <button class="btn-hover color-7" onClick={handleButtonClick1}>Cezaevindeki Kötü Muameleler</button>
      </div>
       <Row>
      <div style={{ height: "80px" }}></div>

       <h2  className="text-center gradient-text mb-5" style={{ fontSize: "2.7rem" }}>Kapatılan Kurumlar</h2>

        <Col lg={6}>
        <KurumlarAciklama/>
        </Col>
        <Col lg={6}>
        <KurumlarGrafik/>
        </Col>
        <div class="buttons">
        <button class="btn-hover color-7" onClick={handleButtonClick2}>Kapatılan ve El Konulan Kurumlar</button>
      </div>
      </Row>  
      </Container>

      <div  style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="mask-overlay"></div>
      <div style={{backgroundColor:"#262626"}}>
      <Container style={{padding:"7%"}}>
      <h2 className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>Terör Suçu İstatistikleri</h2>
  
   <AnasayfaTypewriterText/>
   <AnasayfaIstatistik/>
   <div class="buttons">
        <button class="btn-hover color-7" onClick={handleButtonClick3}>Kapsamlı İstatistikler</button>
      </div>
   <div style={{ height: "50px" }}></div>

   <h2 className="text-center text-white mb-4" style={{ fontSize: "2.7rem" }}>Yargı Bağımsızlığı</h2>
    <p className='text-white text-center'> 2016'da bir günde 2,745 hakim ve savcı gözaltına alınmıştır.  </p>
    <div class="buttons">
        <button class="btn-hover color-7" onClick={handleButtonClick4}>Yargıya Müdahale ve Zaman Çizelgesi</button>
      </div>
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
