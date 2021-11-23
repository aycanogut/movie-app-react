import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "../Loader/Loader";

const Homepage = lazy(() => import("../Homepage/Homepage"));
const Catalog = lazy(() => import("../Catalog/Catalog"));
const Favorites = lazy(() => import("../Favorites/Favorites"));

function Routing() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default Routing;
