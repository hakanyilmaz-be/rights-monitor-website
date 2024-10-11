import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTranslation } from 'react-i18next';

const TarihselDevami = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu kullanmak için hook
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const ref = useRef();

  const text1 = t('text1'); // Çevirilen metin 1
  const text2 = t('text2'); // Çevirilen metin 2

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
