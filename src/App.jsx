import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Routing from "./utils/Routing";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
