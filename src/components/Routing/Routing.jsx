import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../Loader/Loader";
const Homepage = lazy(() => import("../Homepage/Homepage.styled"));
const Catalog = lazy(() => import("../Catalog/Catalog"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Catalog />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
