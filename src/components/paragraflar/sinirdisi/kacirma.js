import React from "react";
import "./sinirdisi-text.css";
import { Col, Row } from "react-bootstrap";
import profileInandi from "../../../assets/img/inandi.jpg";

const KacirmaAciklama = () => {
  return (
    <>
      <Row>
        <Col lg={4}>
          <img alt="Orhan Inandi" src={profileInandi} className="img-fluid " />
          <p className="text-center" style={{fontSize: "10px"}}>
            Kırgızistan'dan kaçırılarak Türkiye’ye getirilen
            Orhan İnandı’nın işkence gördüğünü ispat eden ve kolunun
            kırıldığı açıkça anlaşılan görüntüsü
          </p>
        </Col>
        <Col lg={8}>
          <h2 className="alt-baslik" style={{ fontWeight: "bold" }}>
            Yasa Dışı Kaçırma Çalışmaları
          </h2>
          <p className="small-paragraph">
            2016 yılında İsviçre’de Hizmet’le ilişkili olduğu düşünülen bir
            işadamı, Türkiye büyükelçiliği çalışanı iki kişi tarafından
            kaçırılmaya çalışıldı. Ancak İsviçreli yetkililer konuyla ilgili
            soruşturma başlatarak, elçilik çalışanları hakkında tutuklama kararı
            çıkardı.
          </p>
          <p className="small-paragraph">
            26 Ekim 2016’da İhsan Nuri Akpınar ve Murat Acar isimli iki
            akademisyenin, BM sığınma başvuruları olmasına rağmen, Bahreyn
            İnterpol'ü tarafından Türkiye’ye teslim edildikleri iddia edildi.
            Acar’ın ortaya çıkan mahkeme ifadesine göre, Türkiye’ye
            getirildikten sonraki gözaltı sürecinde işkence gördü ve bir yıl
            iddianamesi olmaksızın hapiste tutuldu.
          </p>
        </Col>
        <Col lg={12} style={{ paddingTop: "1rem" }}>
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
            Siyasi saikli taciz korkusuyla ülkeden kaçan kişilerin yakınları,
            güvenlik güçlerinin, kişinin yerini açıklamaları veya kişiyi
            Türkiye’ye dönmesi için teşvik etmeleri için baskı yapmak amacıyla
            tehdit edildiklerini ve kendilerine gözdağı verildiğini aktardı.
          </p>
          <h2 className="alt-baslik" style={{ fontWeight: "bold" }}>
            Uluslararası Tepki
          </h2>

          <p className="small-paragraph">
            Birçok uluıslararsı kurum ve kuruluş başta Gülen Hareketi mensupları
            olmak üzere Türkiye'nin ulusöteasi baskı uygulamalarını rapor etmiş
            ve kınamıştır.
          </p>
          <p className="small-paragraph">
            BM özel raportörleri tarafından 2020 Mayıs ayında yayınlanan bir
            raporda, hükümetin 2016 darbe girişiminden beri 100’den fazla Türk
            vatandaşını Türkiye’ye zor kullanarak nakletmek için diğer
            devletlerle iş birliği yaptığı bildirildi.
          </p>

          <p className="small-paragraph">
            Avrupa Konseyi Parlamenterler Meclisi (AKPM), Gülen Hareketi
            üyelerine karşı ulus ötesi baskı taktiklerinin kullanılmasını
            açıkça&nbsp;
            <a href="https://pace.coe.int/en/files/32999/html" target="_blank">
              kınamıştır.{" "}
            </a>
            Türkiye'nin ulusötesi baskı kampanyasında, iade işlemlerinin kötüye
            kullanılması, INTERPOL Kırmızı Bültenleri ve terörün finansmanıyla
            mücadele tedbirlerine başvurulduğu ve kişilerin hukuka aykırı bir
            şekilde sınır dışı edilmesi ya da nakledilmesi için diğer
            devletlerle işbirliği yapıldığı tespit edilmiştir.
          </p>
          <p className="small-paragraph">
            Freedom Huose&nbsp;
            <a
              href="https://freedomhouse.org/report/transnational-repression"
              target="_blank"
            >
              raporuna
            </a>{" "}
            göre ise, muhaliflere yöenlik ulusötesi baskı uygulayan ülkeler
            sıralamasında Türkiye ilk beşte yer almaktadır.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default KacirmaAciklama;
