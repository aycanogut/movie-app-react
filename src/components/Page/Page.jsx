import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "../Header/Header.styled";
import Card from "../Card/Card.styled";
import Wrapper from "../Wrapper/Wrapper.styled";

function Page() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default Page;
