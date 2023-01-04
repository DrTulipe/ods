import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
