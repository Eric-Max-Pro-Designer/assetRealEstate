import Navbar from "./components/Navbar";
import Header from "./components/Header";  
// import Search from "./components/Search";
import PropertyCard from "./components/PropertyCard";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    
      <>
        <Navbar />
        <Header />
        {/* <Search /> */}
       <div className="row d-flex gap-5 m-auto justify-content-center mt-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
        <Footer />
      </>

  );
}

export default App;