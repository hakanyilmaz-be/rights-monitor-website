import React from "react";
import { motion, useAnimation } from "framer-motion";

const TarihselDevami = () => {
  const text1 = `2000'li yılların başında Türkiye, Avrupa Birliği ile katılım müzakerelerinde önemli ilerlemeler kaydetmiş ve bu durum hukukun üstünlüğü ile işkence ve kötü muameleyi ortadan kaldırma çabalarında belirgin iyileşmelere yol açmıştır. Ancak, bu müzakereler Kıbrıs'taki çatışma nedeniyle Brüksel tarafından uygulanan engellerle çıkmaza girmiştir. Bu durum, Türk yönetici elitinin reform yapma isteğinin azalmasıyla çakışmış ve 2011'deki üçüncü seçim zaferinden sonra otoriter eğilimler göstererek yargı bağımsızlığı ile hukukun üstünlüğünü zayıflatmaya başlamışlardır.`;
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
      transition: { duration: 0.5 },
    },
  };

  const controls = useAnimation();

  const handleAnimationComplete = () => {
    controls.start("visible");
  };

  const words1 = text1.split(" ").map((word, index) => {
    return (
      <motion.span
        key={index}
        variants={childVariants}
        style={{ display: "inline-block", marginRight: "5px" }}
      >
        {word}&nbsp;
      </motion.span>
    );
  });

  const words2 = text2.split(" ").map((word, index) => {
    return (
      <motion.span
        key={index}
        variants={childVariants}
        style={{ display: "inline-block", marginRight: "5px" }}
      >
        {word}&nbsp;
      </motion.span>
    );
  });

  return (
    <div className="small-paragraph" style={{color:"white"}}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.p>{words1}</motion.p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.p>{words2}</motion.p>
      </motion.div>
    </div>
  );
};

export default TarihselDevami;
