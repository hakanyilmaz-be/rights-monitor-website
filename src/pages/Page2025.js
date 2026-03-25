import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Page2025 = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const isEnglish = pathname.startsWith("/en/");
    const target = isEnglish ? "/html/2025/en.html" : "/html/2025/tr.html";
    window.location.replace(target); // tam sayfa geçiş
  }, [pathname]);

  return <div style={{ padding: 24 }}>Yönlendiriliyor…</div>;
};

export default Page2025;
