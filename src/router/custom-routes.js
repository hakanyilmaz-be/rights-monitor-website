import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminTemplate from "../template/admin-template";
import KitleselPage from "../pages/KitleselPage";
import OlumlerPage from "../pages/OlumlerPage";
import HassasGruplarPage from "../pages/HassasGruplar";
import SinirDisiIade from "../pages/SinirDisiIade";
import KapatilanKurumlar from "../pages/KapatilanKurumlar";
import KaybedilenlerPage from "../pages/KaybedilenlerPage";
import IhraclarPage from "../pages/IhraclarPage";
import CezaeviPage from "../pages/CezaeviPage";
import SosyalEkonomikPage from "../pages/SosyalEkonomikPage";
import TerorDataPage from "../pages/TerorDataPage";
import YargiPage from "../pages/YargiPage";
import IskencePage from "../pages/IskencePage";
import AnaSayfa from "../pages/AnaSayfa";
import ScrollToTop from "./ScrollToTop";
import Page2024 from "../pages/Page2024";

const CustomRoutes = () => {
  return (
    <BrowserRouter> 
      <ScrollToTop />      
      <Routes>
        {/* Ana sayfa rotaları */}
        <Route path="/tr" element={<AdminTemplate><AnaSayfa/></AdminTemplate>} />
        <Route path="/en" element={<AdminTemplate><AnaSayfa/></AdminTemplate>} />

        {/* Türkçe rotalar */}
        <Route path="/tr/kitlesel-gozaltilar" element={<AdminTemplate><KitleselPage /></AdminTemplate>} />
        <Route path="/tr/iskenceler" element={<AdminTemplate><IskencePage /></AdminTemplate>} />    
        <Route path="/tr/olumler" element={<AdminTemplate><OlumlerPage /></AdminTemplate>} />  
        <Route path="/tr/hassasgruplar" element={<AdminTemplate> <HassasGruplarPage/> </AdminTemplate>} /> 
        <Route path="/tr/illegal-iade" element={<AdminTemplate> <SinirDisiIade/> </AdminTemplate>} />  
        <Route path="/tr/kapatilankurumlar" element={<AdminTemplate> <KapatilanKurumlar/> </AdminTemplate>} />
        <Route path="/tr/kaybedilenler" element={<AdminTemplate> <KaybedilenlerPage/> </AdminTemplate>} />  
        <Route path="/tr/ihraclar" element={<AdminTemplate> <IhraclarPage/> </AdminTemplate>} />    
        <Route path="/tr/cezaevi-hak-ihlali" element={<AdminTemplate> <CezaeviPage/> </AdminTemplate>} /> 
        <Route path="/tr/sosyal-ekonomik-hak-ihlali" element={<AdminTemplate> <SosyalEkonomikPage/> </AdminTemplate>} />       
        <Route path="/tr/teror-sucu-istatistikleri" element={<AdminTemplate> <TerorDataPage/> </AdminTemplate>} />       
        <Route path="/tr/yargi-bagimsizligi" element={<AdminTemplate> <YargiPage/> </AdminTemplate>} /> 
        <Route path="/tr/2024-almanak" element={<AdminTemplate> <Page2024/> </AdminTemplate>} /> 
         

        {/* İngilizce rotalar */}
        <Route path="/en/mass-detentions" element={<AdminTemplate><KitleselPage /></AdminTemplate>} />
        <Route path="/en/tortures" element={<AdminTemplate><IskencePage /></AdminTemplate>} />    
        <Route path="/en/deaths" element={<AdminTemplate><OlumlerPage /></AdminTemplate>} />  
        <Route path="/en/vulnerable-groups" element={<AdminTemplate> <HassasGruplarPage/> </AdminTemplate>} /> 
        <Route path="/en/illegal-deportation" element={<AdminTemplate> <SinirDisiIade/> </AdminTemplate>} />  
        <Route path="/en/closed-institutions" element={<AdminTemplate> <KapatilanKurumlar/> </AdminTemplate>} />
        <Route path="/en/missing-people" element={<AdminTemplate> <KaybedilenlerPage/> </AdminTemplate>} />  
        <Route path="/en/dismissals" element={<AdminTemplate> <IhraclarPage/> </AdminTemplate>} />    
        <Route path="/en/prison-rights-violations" element={<AdminTemplate> <CezaeviPage/> </AdminTemplate>} /> 
        <Route path="/en/socio-economic-rights-violations" element={<AdminTemplate> <SosyalEkonomikPage/> </AdminTemplate>} />       
        <Route path="/en/terror-crime-statistics" element={<AdminTemplate> <TerorDataPage/> </AdminTemplate>} />       
        <Route path="/en/judicial-independence" element={<AdminTemplate> <YargiPage/> </AdminTemplate>} />  

        {/* Varsayılan rota */}
        <Route path="/" element={<Navigate to="/tr" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
