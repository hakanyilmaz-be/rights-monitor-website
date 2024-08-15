import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import rightsMonitorImage from "../assets/img/rights-monitor.jpg"
import './AnaSayfa.css'
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
import logo from "../assets/img/logo.png";
import { BiMenuAltRight } from "react-icons/bi";
import AnasayfaMenu from '../components/side-bar/anasayfa-menu'



const AnaSayfa = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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

  const handleButtonClick5 = () => {
    window.open('https://tr.solidaritywithothers.com/our-reports-and-publications', '_blank');

  };

  const handleButtonClick6 = () => {
    window.open('https://tr.solidaritywithothers.com/turkey-rights-monitor', '_blank');
  };



  return (
    <div>
      <div className="image-header-container">
        <Image src={rightsMonitorImage} fluid className="centered-image" />

        <div className="homepageheader">
          <img alt="Turkey Rights Monitor" src={logo} className="img-fluid " />
          <div className='homepagemenu'  onClick={toggleMenu} style={{ cursor: 'pointer' }}> <span style={{fontSize:"30px"}}>Menü</span>  <BiMenuAltRight /></div>
           <div className="homepagemenucontent">
         
           { showMenu && <AnasayfaMenu/>}
         
     
           </div>

        </div>


        <div className="centered-header3">
          <h1  className="text-center text-white bebas-neue-regular anasayfa-baslik">
            İNSAN HAKLARI İHLALLERİ <br/> İZLEME PROJESİ
          </h1>
          
          <div class="buttons buton-mobile">
            <button style={{width:"150px", marginRight:"20px", fontSize:"14px", fontWeight:"400"}} class="btn-hover color-5" onClick={handleButtonClick5}>
              Tematik Raporlar
            </button>
            <button style={{width:"150px", marginRight:"20px", fontSize:"14px", fontWeight:"400"}} class="btn-hover color-5" onClick={handleButtonClick6}>
              Haftalık Bültenler
            </button>
          </div>
        </div>

        {/* <div className="centered-header2">
          <AnasayfaIntro />
        </div>

        <div className="centered-header">
          <AnasayfaHeader />
        </div> */}
      </div>
      <div className="lg-only" style={{ height: "50px" }}></div>

      <div class="buttons butons-mobile mobile-only">
            <button style={{width:"120px", marginRight:"20px", fontSize:"13px", fontWeight:"400"}} class="btn-hover color-5" onClick={handleButtonClick5}>
              Tematik Raporlar
            </button>
            <button style={{width:"120px", marginRight:"0px", fontSize:"13px", fontWeight:"400"}} class="btn-hover color-5" onClick={handleButtonClick6}>
              Haftalık Bültenler
            </button>
          </div>
      <div className="mobile-only" style={{ height: "20px" }}></div>

      <Container style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <TarihselAciklama />
    
      </Container>
      <div style={{ height: "50px" }}></div>

      <TarihselResim />
      <div style={{ backgroundColor: "#011029" }}>
        <Container style={{ padding: "7%" }}>
          <TarihselDevami />
        </Container>
      </div>
      <Container style={{ padding: "7%" }}>
        <AnasayfaKitlesel />
      </Container>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaHassas />
          </Container>
        </div>
      </div>
      <Container style={{ padding: "5%" }}>
        <Row>
          <h2
            className="text-center gradient-text mb-4"
            style={{ fontSize: "2.7rem" }}
          >
            Yaşam Hakkı İhlalleri
          </h2>

          <Col lg={4}>
            <AnasayfaOlumler />
          </Col>
          <Col lg={8}>
            <YillarGrafik />
          </Col>
        </Row>
      </Container>
     
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaKaybetmeler />
          </Container>
        </div>
      </div>




      <Container style={{ padding: "5%" }}>
       

        <AnasayfaKacirilmalar />
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <AnasayfaIhraclar />
     
          </Container>
        </div>
      </div>



      <Container style={{ padding: "7%" }}>
        <AnasayfaCezaevi />
        <HakIhlaliYillar />
        <div class="buttons">
          <button class="btn-hover color-5" onClick={handleButtonClick1}>
            Cezaevindeki Kötü Muameleler
          </button>
        </div>
      </Container>






      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <div style={{height:"30px"}}></div>
            <AnasayfaSosyal />
          </Container>
        </div>
      </div>



      <Container style={{ padding: "7%" }}>
        <Row>
          <div style={{ height: "80px" }}></div>

          <h2
            className="text-center gradient-text mb-5"
            style={{ fontSize: "2.7rem" }}
          >
            Kapatılan Kurumlar
          </h2>

          <Col lg={6}>
            <KurumlarAciklama />
          </Col>
          <Col lg={6}>
            <KurumlarGrafik />
          </Col>
          <div class="buttons">
            <button class="btn-hover color-5" onClick={handleButtonClick2}>
              Kapatılan ve El Konulan Kurumlar
            </button>
          </div>
        </Row>
      </Container>

      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className="mask-overlay"></div>
        <div style={{ backgroundColor: "#011029" }}>
          <Container style={{ padding: "7%" }}>
            <h2
              className="text-center text-white mb-4"
              style={{ fontSize: "2.7rem" }}
            >
              Terör Suçu İstatistikleri
            </h2>

            <AnasayfaTypewriterText />
            <AnasayfaIstatistik />
            <div class="buttons">
              <button class="btn-hover color-5" onClick={handleButtonClick3}>
                Kapsamlı İstatistikler
              </button>
            </div>
   

  
          </Container>

        </div>
      </div>
      <Container style={{ padding: "7%" }}>
      <h2
              className="text-center mb-4"
              style={{ fontSize: "2.7rem" }}
            >
              Yargı Bağımsızlığı
            </h2>
            <p className="text-center">
              {" "}
              1982 Anayasası'na göre hâkimler, görevlerinde bağımsızdır ve hiçbir organ, makam veya kişi yargı yetkisinin kullanılmasında hâkimlere emir ve talimat veremez. Ancak 2016 yılında bir günde 2.745 hâkim ve savcının gözaltına alınmasıyla yargının siyasi baskı ve müdahalelere maruz kaldığı görülmektedir. Aralık 2013’ten bugüne yargı bağımsızlığının erozyona uğradığını gösteren yüzlerce vaka tespit edilerek bu sayfada paylaşılmıştır.{" "}
            </p>
            <div class="buttons">
              <button class="btn-hover color-5" onClick={handleButtonClick4}>
                Yargıya Bağımsızlığı Zaman Çizelgesi
              </button>
            </div>
       </Container>
      {/*   <div style={{ height: "20px" }}></div>
      <Slide />
      <div style={{ height: "10px" }}></div>
      <Slide2 /> */}
    </div>
  );
}

export default AnaSayfa
