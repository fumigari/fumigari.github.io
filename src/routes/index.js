import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Wrapper from "../components/Wrapper";

const AppRoutes = {
  Home: '/',
  About: '/about',
  Experience: "/experience",
  Projects: "/projects",
  Contact: "/contact"
}

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Wrapper element={<Home />}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;