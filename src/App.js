import { Component } from "react";
import React from "react";
import "./index.css";
import CountriesList from "./CountriesList";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import CountrySingle from "./CountrySingle";
import Header from "./Header";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="/countries/:name" element={<RouteWrapper />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
