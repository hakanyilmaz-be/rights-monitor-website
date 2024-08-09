import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import AnaSayfa from "../pages/AnaSayfa";
import ScrollToTop from "./ScrollToTop";

const CustomRoutes = () => {
  return (
    <BrowserRouter> 
    <ScrollToTop />      
      <Routes>
        <Route path="/">
          <Route index element={<AdminTemplate><AnaSayfa/> </AdminTemplate>} /> 
          <Route path="kitlesel" element={<AdminTemplate><KitleselPage /></AdminTemplate>} />  
          <Route path="olumler" element={<AdminTemplate><OlumlerPage /></AdminTemplate>} />  
          <Route path="hassasgruplar" element={<AdminTemplate> <HassasGruplarPage/> </AdminTemplate>} /> 
          <Route path="illegaliade" element={<AdminTemplate> <SinirDisiIade/> </AdminTemplate>} />  
          <Route path="kapatilankurumlar" element={<AdminTemplate> <KapatilanKurumlar/> </AdminTemplate>} />
          <Route path="kaybedilenler" element={<AdminTemplate> <KaybedilenlerPage/> </AdminTemplate>} />  
          <Route path="ihraclar" element={<AdminTemplate> <IhraclarPage/> </AdminTemplate>} />    
          <Route path="cezaevi-hak-ihlali" element={<AdminTemplate> <CezaeviPage/> </AdminTemplate>} /> 
          <Route path="sosyal-ekonomik-hak-ihlali" element={<AdminTemplate> <SosyalEkonomikPage/> </AdminTemplate>} />       
          <Route path="teror-sucu-istatistikleri" element={<AdminTemplate> <TerorDataPage/> </AdminTemplate>} />       
          <Route path="yargi-bagimsizligi" element={<AdminTemplate> <YargiPage/> </AdminTemplate>} />       
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;