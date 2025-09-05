import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <main className="pt-20">
        <Routing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
