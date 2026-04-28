import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="container-fluid bg-white p-0">

      <Navbar />
      <Header />
      <Search />
      <Footer />

    </div>
  );
}

export default ContactPage;