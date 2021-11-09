import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Wrapper from "../Wrapper/Wrapper.styled";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/search" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default Routing;
