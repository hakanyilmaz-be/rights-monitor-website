import React from "react";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import profileInandi from "../../../assets/img/inandi.jpg";

const KacirmaAciklama = () => {
  return (
    <>
      <Row>
        <Col lg={4}>
          <img alt="Orhan Inandi" src={profileInandi} className="img-fluid " style={{ paddingTop: '2.7rem' }}/>
        </Col>
        <Col lg={8}>
          <h2 style={{ fontWeight: "bold"}}>Yasa Dışı Kaçırma Çalışmaları</h2>
          <p className="small-paragraph">
            2016 yılında İsviçre’de Hizmet’le ilişkili olduğu düşünülen bir
            işadamı, Türkiye büyükelçiliği çalışanı iki kişi tarafından
            kaçırılmaya çalışıldı. Ancak İsviçreli yetkililer konuyla ilgili
            soruşturma başlatarak, elçilik çalışanları hakkında tutuklama kararı
            çıkardı.
          </p>
          <p className="small-paragraph">
            26 Ekim 2016’da İhsan Nuri Akpınar ve Murat Acar isimli iki
            akademisyen, BM sığınma başvuruları olmasına rağmen, “İnterpol”
            tarafından Türkiye’ye teslim edildikleri iddia edildi. Acar’ın
            ortaya çıkan mahkeme ifadesine göre, Türkiye’ye getirildikten
            sonraki gözaltı sürecinde işkence gördü ve bir yıl iddianamesi
            olmaksızın hapiste tutuldu.
          </p>
        </Col>
        <Col lg={12} style={{ paddingTop: '1rem' }}>
          <p className="small-paragraph">
            Akpınar’ı Türkiye’ye getiren polis ekibi Türk İnterpol Birimine
            bağlı polis ekibiydi. Acar ve Akpınar’ın dosyalarına giren resmi
            yazılara göre, Türk İnterpol polisleri görevlendirme yazısıyla
            Bahreyn’e gitmiş ve Bahreyn’in iade ettiği kişileri alıp Türkiye’ye
            getirmişti. Ancak dosyada iade prosedürüne ilişkin herhangi bir
            yazışma ya da Bahreyn’in iade ettiğine ilişkin hiçbir belge
            bulunmuyordu. Bu sebeple Acar durumu kaçırılma olarak
            nitelendirilmektedir.
          </p>
          <p className="small-paragraph">
            Kaçırılma sürecinde tüm belgelerin İnterpol polisleri tarafından
            düzenlenmesi üzerine Acar cezaevinde kaldığı süreçte, İnterpol Genel
            Merkezine bir mektup yazdı ve durumdan haberdar olup olmadıklarını
            sordu. Gelen yanıtta; Türkiye veya Bahreyn polisi tarafından
            İnterpol veri tabanında herhangi bir veri kaydının sözkonusu
            olmadığı belirtildi. Acar mahkemedeki savunmasında durumu;
            “İnterpol’ün haberi olmadan, İnterpol Birimindeki polislerin görev
            aldığı bir kaçırma” olarak tanımladı.
          </p>
          <p className="small-paragraph">
            Acar gibi pek çok vakanın ortaya çıkmasının ardından İnterpol,
            Türkiye’deki toplu pasaport iptallerinin siyasi olduğu gerekçesiyle,
            Türkiye’nin bildirdiği pasaport iptallerini tanımadı. Dönemin
            İçişleri Bakanı Süleyman Soylu duruma sert tepki gösterse de
            İnterpol’ün bu konudaki tavrı değişmedi.
          </p>
          <p className="small-paragraph">
            2017’de Erdoğan hükümetinin aracılar vasıtasıyla ABD’de Fethullah
            Gülen’in kaçırılması için pazarlık yaptığı öğrenildi. ABD Başkanı
            Donald Trump’ın ilk Ulusal Güvenlik Danışmanı olan Mike Flynn’i de
            kapsayan plan dâhilinde, önce Gülen’in ABD’deki itibarının yok
            edilmesi için bir kampanya başlatılması, akabinde de kaçırılarak
            Türkiye’ye götürülmesi konuşuldu.
          </p>
          <p className="small-paragraph">
            BM özel raportörleri tarafından 2020 Mayıs ayında yayınlanan bir
            raporda, hükümetin 2016 darbe girişiminden beri 100’den fazla Türk
            vatandaşını Türkiye’ye zor kullanarak nakletmek için diğer
            devletlerle iş birliği yaptığı bildirildi.
          </p>
          <p className="small-paragraph">
            Siyasi saikli taciz korkusuyla ülkeden kaçan kişilerin yakınları,
            güvenlik güçlerinin, kişinin yerini açıklamaları veya kişiyi
            Türkiye’ye dönmesi için teşvik etmeleri için baskı yapmak amacıyla
            tehdit edildiklerini ve kendilerine gözdağı verildiğini aktardı.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default KacirmaAciklama;
