import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminTemplate from "../template/admin-template";
import KitleselPage from "../pages/KitleselPage";
import OlumlerPage from "../pages/OlumlerPage";
import HassasGruplarPage from "../pages/HassasGruplar";

const CustomRoutes = () => {
  return (
    <BrowserRouter>       
      <Routes>
        <Route path="/">
          <Route index element={<AdminTemplate><KitleselPage /></AdminTemplate>} /> 
          <Route path="kitlesel" element={<AdminTemplate><KitleselPage /></AdminTemplate>} />  
          <Route path="olumler" element={<AdminTemplate><OlumlerPage /></AdminTemplate>} />  
          <Route path="hassasgruplar" element={<AdminTemplate> <HassasGruplarPage/> </AdminTemplate>} />       



        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;