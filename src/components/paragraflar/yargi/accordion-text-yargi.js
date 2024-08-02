import { Card, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./yargi-text.css";

function AccordionTextYargi() {
  return (
    <div className="yargi">
    <Card className="mb-4 mt-5">
      <Card.Header
        as="h5"
        style={{
          color: "white",
          background: "linear-gradient(to right, #b1170c, #e55d53)",
        }}
      >
        Yargıya Müdahale Süreçleri
      </Card.Header>
      <Card.Body>

     
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="custom-accordion-header-yargi">
            OHAL Döneminde Yargıya Müdahale
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-yargi">
            <Row>
              <p className="small-paragraph">
              HSYK'nın yargı mensuplarını görevden alma ve yer değiştirme uygulamaları, yargının siyasi müdahalelere açık olduğunu göstermektedir. Yargı bağımsızlığına yönelik bu tür müdahaleler, hukukun üstünlüğüne dayalı demokratik sistemlerin temel ilkelerine aykırıdır. Özellikle OHAL koşullarında yapılan Anayasa değişiklikleri, Meclis denetimini zayıflatmış ve yargının yürütmeye bağımlı hale gelmesine yol açmıştır. Sosyal Demokrasi Vakfı'nın 2019 anketine göre, Türkiye'de yargıya güvenenlerin oranı yüzde 38'e kadar düşmüştür.
              </p>
              <p className="small-paragraph">
              Özellikle OHAL dönemi ve sonrasında yapılan operasyonlar, yargının bağımsızlığını ciddi şekilde zedelemiştir. Uluslararası Af Örgütü Türkiye Araştırmacısı Andrew Gardner, çok sayıda kişinin kanıt olmadan gözaltına alındığını ve tutuklandığını belirtmiştir. Bu süreçte, yargı mensuplarının büyük bir kısmı gözaltına alınmış, tutuklanmış veya meslekten ihraç edilmiştir. Bununla birlikte iktidar ve mevcut hakim- savcılar tarafından güçler ayrılığı ilkesi ile ters düşen davranış ve söylemler kamuya yansımıştır. Bu durum, yargının bağımsızlığına ve hukuk devletine duyulan güveni sarsmıştır.
                </p>
                <p className="small-paragraph">
                Avrupa Birliği'nin 2020 Türkiye Raporu'nda, Türkiye'nin demokratik yapısının erozyona uğradığı ve yargı bağımsızlığının yok edildiği eleştirileri yer almıştır. Türkiye'nin yargı bağımsızlığına dair endişeler, yolsuzlukla mücadelede ilerleme kaydedilmediği ve yargının siyasallaştığı yönündeki iddialarla pekişmektedir. Gazeteciler, siyasetçiler ve aktivistlerin temelsiz iddialarla tutuklanması, temel hak ve özgürlükler üzerinde baskı oluşturmuştur.
                </p>
                <p className="small-paragraph">
                Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi (AİHM) kararlarının uygulanmaması, yargının bağımsız olmadığına dair endişeleri artırmaktadır. Örneğin, CHP Milletvekili Enis Berberoğlu hakkında verilen yeniden yargılama kararının uygulanmaması, yargı kararlarına saygının azaldığını göstermektedir. Cumhurbaşkanı Erdoğan'ın, Anayasa Mahkemesi'nin tutuklu gazeteciler Can Dündar ve Erdem Gül için verdiği tahliye kararı için "Karara uymuyorum, saygı da duymuyorum" demesi, yargı bağımsızlığına yönelik ciddi bir meydan okuma olarak değerlendirilebilir.
                </p>
                <p className="small-paragraph">
                2020 yılında Türkiye'den AİHM'e yapılan başvuru sayısının 11,750'ye ulaşması ve Türkiye'nin en çok ifade özgürlüğü, adil yargılanma hakkı ve güvenlik özgürlüğü ihlalleri ile yargılanması, yargının bağımsız olmadığına dair uluslararası toplumdaki algıyı pekiştirmektedir.
                </p>
                <p className="small-paragraph">
                Türkiye'de yargı bağımsızlığı ve tarafsızlığının sağlanması, hukuk devleti ilkesinin yaşama geçirilmesi ve toplumun yargıya olan güveninin yeniden tesis edilmesi için hukuki düzenlemeler kadar uygulamalarda da somut adımlar atılması gerekmektedir. Yargının her türlü siyasi baskıdan ve müdahaleden arındırılması, adil ve tarafsız bir yargı sistemi için elzemdir. Bu bağlamda, hukukun üstünlüğüne dayanan bir hukuk devleti inşa etmek, tüm toplum kesimlerinin ortak sorumluluğudur.
                </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="custom-accordion-header-yargi">
          Yeni Düzen
          </Accordion.Header>
          <Accordion.Body className="accordion-body-text-yargi">
            <Row>
            <p className="small-paragraph">
            Türkiye'de yasama, yürütme ve yargı erklerinin birbirinden bağımsız olması gerektiği, demokratik bir hukuk devletinin temel ilkelerindendir. Ancak, Türkiye'de bu üç erk arasındaki sınırların bulanıklaşması ve iç içe geçmesi, yargının bağımsızlığı ve tarafsızlığı konusundaki endişeleri artırmıştır. Özellikle son yıllarda, yargı mensuplarının iktidar yanlısı kararlar aldığı ve yargı sistemine siyasi müdahalelerin arttığı gözlemlenmektedir.
                </p>
                <p className="small-paragraph">
                Cumhurbaşkanlığı Hükümet Sistemi'ne geçişle birlikte, Hakimler ve Savcılar Kurulu'nun (HSK) üyelerinin atanmasında Cumhurbaşkanı'na ve Meclis'e geniş yetkiler verilmiştir. Meclis'teki çoğunluğun Cumhur İttifakı'na ait olması, HSK'daki Cumhurbaşkanı ağırlığını artırmış ve yürütme ile yasamanın yargı üzerindeki etkisini pekiştirmiştir. HSK'nın, iktidarı rahatsız eden kararlara imza atan yargı mensuplarının görev yerlerini değiştirmesi veya iktidara yakın olanları kayırması, yargının bağımsızlığını zedeleyen en somut örneklerdendir.
                </p>
                <p className="small-paragraph">
                2017 yılında HSK tarafından aralarında Yargıçlar Sendikası üyelerinin de bulunduğu 780 yargıç ve savcının görev yerinin değiştirilmesi, yargı bağımsızlığına yönelik endişeleri artırmıştır. Bu tür müdahaleler, yargıç ve savcıların bağımsız karar vermesini engelleyerek, yargıyı siyasi baskılara açık hale getirmektedir. Yargının bağımsızlığına yönelik bu tür müdahaleler, adil yargılanma hakkını ve hukukun üstünlüğünü ciddi şekilde zedelemektedir.
                </p>
                <p className="small-paragraph">
                Yargı mensuplarının iktidar yanlısı ve keyfi kararlar aldığına dair birçok örnek bulunmaktadır. Örneğin, 2014 yılında dönemin Başbakanı Erdoğan'ın karşısında düğmesi olmayan cübbesinin önünü iliklemeye çalışarak tepki çeken Danıştay Başkanı Zerrin Güngör'ün, 2017'de yeniden başkan seçilmesi ve ardından Kamu Görevlileri Etik Kurulu Başkanlığı'na atanması, yargı mensuplarının iktidara yakınlığına dair endişeleri artırmıştır. Güngör'ün kızı ise hakimlik mesleğinde bir gün kıdem aldıktan sonra Yargıtay'da tetkik hâkimi yapılmıştır. Bu tür uygulamalar, yargıda liyakat yerine sadakatin öne çıktığını göstermektedir.
                </p>
                <p className="small-paragraph">
                Son dönemde, Gezi Parkı, Osman Kavala, Selahattin Demirtaş, Cumhuriyet gazetesi ve Sözcü gazetesi davaları gibi birçok davada yargının siyasallaştığı iddiaları gündeme gelmiştir. Bu davalarda gazeteciler, siyasetçiler, aktivistler ve insan hakları savunucuları temelsiz iddialarla tutuklanmış, basın ve ifade özgürlüğü ile toplantı ve gösteri yürüyüşü hakkı gibi temel haklar üzerinde baskı oluşturulmuştur. Bu tür davalar, yargının siyasi amaçlarla kullanıldığını ve iktidarın muhalefeti susturmak için yargıyı bir araç haline getirdiğini göstermektedir.
                </p>
                <p className="small-paragraph">
                Türkiye'de yargı bağımsızlığının zedelenmesi, hukukun üstünlüğü ilkesinin hayata geçirilmesinin önündeki en büyük engellerden biridir. Yargının siyasi baskılardan arındırılması, bağımsız ve tarafsız kararlar verebilmesi için hukuki düzenlemelerin yanı sıra uygulamalarda da somut adımlar atılması gerekmektedir. Yargı mensuplarının liyakat esasına göre atanması, yargının siyasi baskılardan korunması ve yargı kararlarına saygı gösterilmesi, demokratik bir hukuk devletinin olmazsa olmaz koşullarıdır. Türkiye'nin, demokratik değerleri ve hukukun üstünlüğünü içselleştirmiş uygar toplumlar arasındaki yerini koruyabilmesi için yargı bağımsızlığına ve tarafsızlığına yönelik adımlar atması elzemdir.
                </p>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </Card.Body>
      </Card>
    </div>
  );
}

export default AccordionTextYargi;
