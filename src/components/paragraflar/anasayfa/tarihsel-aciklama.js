import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TarihselAciklama = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0); // Animasyon sırasını kontrol eden state

  // Çeviri metinleri
  const title1Text = t("home_title1");
  const text1 = t("home_description1");
  const title2Text = t("home_title2");
  const text2 = t("home_description2");
  const title3Text = t("title");
  const text3 = t("historical_description");

  const keywords = [
    t("keywords.nationalism"),
    t("keywords.central"),
    t("keywords.governance"),
    t("keywords.unitarity"),
    t("keywords.violations"),
    t("keywords.torture"),
    t("keywords.forced_disappearances"),
    t("keywords.solidarity"),
    t("keywords.with"),
    t("keywords.others"),
    t("keywords.gulen"),
    t("keywords.hareketi"),
    t("keywords.with2"),
    t("keywords.with3"),
    t("keywords.with4"),
    t("keywords.with5"),
    t("keywords.with6"),
    t("keywords.with7"),
    t("keywords.with8"),
  ];

  // Kelime animasyonları için ortak ayarlar
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

  useEffect(() => {
    // Animasyon sıralamasını zamanlayıcılarla kontrol et
    const timers = [
      setTimeout(() => setStep(1), 0), // Title 1 hemen başlasın
      setTimeout(() => setStep(2), 1000), // Text 1 ==> 2 saniye sonra
      setTimeout(() => setStep(3), 39000), // Title 2 ==> 10 saniye sonra
      setTimeout(() => setStep(4), 40000), // Text 2 ==> 12 saniye sonra
      setTimeout(() => setStep(5), 57000), // Title 3 ==> 18 saniye sonra
      setTimeout(() => setStep(6), 58000), // Text 3 ==> 20 saniye sonra
    ];

    return () => timers.forEach(clearTimeout); // Bileşen temizlenirken zamanlayıcıları iptal et
  }, []);

  const formatWords = (text) =>
    text.split(" ").map((word, index) => {
      const isKeyword = keywords.includes(word);
      return (
        <motion.span
          key={index}
          variants={childVariants}
          style={{
            display: "inline-block",
            marginRight: "5px",
            fontWeight: isKeyword ? "bold" : "normal", // Bold anahtar kelimeler
          }}
        >
          {word}&nbsp;
        </motion.span>
      );
    });

  return (
    <div>
      {/* Title 1 */}
      {step >= 1 && (
        <motion.h4
          className="mb-4 text-center font-weight-bold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ fontWeight: "bold" }}
        >
          {formatWords(title1Text)}
        </motion.h4>
      )}

      {/* Text 1 */}
      {step >= 2 && (
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {formatWords(text1)}
        </motion.p>
      )}

      {/* Title 2 */}
      {step >= 3 && (
        <motion.h4
          className="mb-4 text-center font-weight-bold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ fontWeight: "bold" }}
        >
          {formatWords(title2Text)}
        </motion.h4>
      )}

      {/* Text 2 */}
      {step >= 4 && (
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {formatWords(text2)}
        </motion.p>
      )}

      {/* Title 3 */}
      {step >= 5 && (
        <motion.h4
          className="mb-4 text-center font-weight-bold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ fontWeight: "bold" }}
        >
          {formatWords(title3Text)}
        </motion.h4>
      )}

      {/* Text 3 */}
      {step >= 6 && (
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {formatWords(text3)}
        </motion.p>
      )}
    </div>
  );
};

export default TarihselAciklama;


