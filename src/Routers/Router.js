import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/Header/Header";
import Home from "../component/pages/Home/Home";
import Footer from "../component/Footer/Footer";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default Router;
