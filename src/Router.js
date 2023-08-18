import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "pages/Splash";
import Loading from "pages/Loading";
import Start from "pages/Start";
import Recommend from "pages/Recommend/Recommend";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/" element={<Start />} />
        <Route path="/choose" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
