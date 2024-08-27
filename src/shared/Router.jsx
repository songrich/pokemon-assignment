import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import Dex from "../pages/dex";
import PokemonDetail from "../pages/PokemonDetail";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dex" element={<Dex />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Router;
