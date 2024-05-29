import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminTemplate from "../template/admin-template";
import KitleselPage from "../pages/KitleselPage";
import OlumlerPage from "../pages/OlumlerPage";
import HassasGruplarPage from "../pages/HassasGruplar";
import SinirDisiIade from "../pages/SinirDisiIade";
import KapatilanKurumlar from "../pages/KapatilanKurumlar";
import KaybedilenlerPage from "../pages/KaybedilenlerPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>       
      <Routes>
        <Route path="/">
          <Route index element={<AdminTemplate><KitleselPage /></AdminTemplate>} /> 
          <Route path="kitlesel" element={<AdminTemplate><KitleselPage /></AdminTemplate>} />  
          <Route path="olumler" element={<AdminTemplate><OlumlerPage /></AdminTemplate>} />  
          <Route path="hassasgruplar" element={<AdminTemplate> <HassasGruplarPage/> </AdminTemplate>} /> 
          <Route path="illegaliade" element={<AdminTemplate> <SinirDisiIade/> </AdminTemplate>} />  
          <Route path="kapatilankurumlar" element={<AdminTemplate> <KapatilanKurumlar/> </AdminTemplate>} />
          <Route path="kaybedilenler" element={<AdminTemplate> <KaybedilenlerPage/> </AdminTemplate>} />       






        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;