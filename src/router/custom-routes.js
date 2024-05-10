import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminTemplate from "../template/admin-template";
import AdminDashboardPage from "../pages/AdminDashboardPage";

const CustomRoutes = () => {
  return (
    <BrowserRouter>       
      <Routes>
        <Route path="/">
          <Route index element={<AdminTemplate><AdminDashboardPage /></AdminTemplate>} />       
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;