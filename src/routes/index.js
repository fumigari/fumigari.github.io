import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Wrapper from "../components/Wrapper";
import WIP from "../components/WIP";

const AppRoutes = {
  Home: '/',
  About: '/about',
  Experience: "/experience",
  Projects: "/projects",
  Contact: "/contact"
}

const PageRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoutes.Home} element={<Wrapper element={<Home />}/>} />
        <Route path={AppRoutes.About} element={<Wrapper element={<WIP />}/>} />
        <Route path={AppRoutes.Experience} element={<Wrapper element={<WIP />}/>} />
        <Route path={AppRoutes.Projects} element={<Wrapper element={<WIP />}/>} />
        <Route path={AppRoutes.Contact} element={<Wrapper element={<WIP />}/>} />
      </Routes>
    </HashRouter>
  );
};

export default PageRoutes;