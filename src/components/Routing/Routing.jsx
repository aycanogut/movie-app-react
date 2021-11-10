import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Homepage from "../Homepage/Homepage.styled";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Catalog />} />
      </Routes>
    </Router>
  );
}

export default Routing;
