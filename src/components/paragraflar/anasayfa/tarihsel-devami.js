import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const TarihselDevami = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef();

  const text1 = `2000'li yılların başında Türkiye, Avrupa Birliği ile katılım müzakerelerinde önemli ilerlemeler kaydetmiş ve bu durum hukukun üstünlüğü ile işkence ve kötü muameleyi ortadan kaldırma çabalarında belirgin iyileşmelere yol açmıştır. Ancak, 2011'deki üçüncü seçim zaferinden sonra iktidar otoriter eğilimler göstererek yargı bağımsızlığı ile hukukun üstünlüğünü zayıflatmaya başlatmıştır.`;
  const text2 = `Temmuz 2016'daki darbe girişiminin ardından Türkiye'de insan hakları ve hukukun üstünlüğü ciddi şekilde zedelenmiştir. Dönemin hükümeti, 15 Temmuz darbe girişimine iki yıl süren bir olağanüstü hal ilan ederek yanıt vermiştir. Bu süre zarfında, hakları ve özgürlükleri kısıtlayan, yargı bağımsızlığını ortadan kaldıran ve güçlerini kötüye kullanmakla suçlanan güvenlik güçlerini cesaretlendiren bir cezasızlık iklimi yaratan bir dizi yürütme kararnamesi çıkarılmıştır. Olağanüstü hal, 2018'in ortalarında kaldırılmış olsa da, birçok baskıcı tedbir yasalarla kalıcı hale getirilmiş ve 2017'de gerçekleştirilen anayasa referandumu ile parlamenter sistemden, güçler ayrılığı ve denetim mekanizması neredeyse hiç olmayan bir başkanlık sistemine geçiş yapılmıştır.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 },
    },
  };

  const words1 = text1.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={childVariants}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      {word}&nbsp;
    </motion.span>
  ));

  const words2 = text2.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={childVariants}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      {word}&nbsp;
    </motion.span>
  ));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start("visible");
          observer.unobserve(ref.current); // İlk görünümde tetikle ve tekrar kontrol etme
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls1]);

  return (
    <div ref={ref} className="small-paragraph" style={{ color: "white" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls1}
        onAnimationComplete={() => controls2.start("visible")}
      >
        <motion.p>{words1}</motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls2}
      >
        <motion.p>{words2}</motion.p>
      </motion.div>
    </div>
  );
};

export default TarihselDevami;
