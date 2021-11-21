import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./sass/style.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Footer, Home, News, Contact, NoMatch } from "./components";

library.add(faEnvelope, faPhone);

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Navigation />
          <div className="container-main">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/news" exact element={<News />} />
              <Route path="/contact" exact element={<Contact />} />
              <Route path="*" exact element={<NoMatch />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
