import React from "react";
import { motion } from "framer-motion";

const TarihselAciklama = () => {
  const text = `Türkiye Cumhuriyeti, milliyetçilik, merkezi yönetim ve üniterlik üzerine kurulduğundan insan hakları üzerinde olumsuz etkiler oluşmuştur. Azınlık hakları, ifade özgürlüğü, medya özgürlüğü, yargı bağımsızlığı sürekli sorunlu alanlar olmuş, 1980'lerde askeri cunta yönetimi, 1990'larda Kürt bölgelerindeki askeri çatışmalar sırasında ciddi hak ihlalleri, işkence ve zorla kaybetmeler yaşanmıştır.`;

  const words = text.split(" ").map((word, index) => {
    if (
      word === "milliyetçilik," ||
      word === "merkezi" ||
      word === "yönetim" ||
      word === "ve" ||
      word === "üniterlik" ||
      word === "hak" ||
      word === "ihlalleri," ||
      word === "işkence" ||
      word === "ve" ||
      word === "zorla" ||
      word === "kaybetmeler"

    ) {
      return <b key={index}>{word}</b>;
    }
    return word;
  });

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

  return (
    <div>
      <h4 className="mb-4 text-center">TÜRKİYE'NİN İNSAN HAKLARI SİCİLİ</h4>
      <motion.p variants={containerVariants} initial="hidden" animate="visible">
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ display: "inline-block", marginRight: "5px" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TarihselAciklama;
