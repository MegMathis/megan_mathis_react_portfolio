import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("AboutMe");

  const showPage = () => {
    if (page === "AboutMe") {
      return <AboutMe />;
    }
    if (page === "Portfolio") {
      return <Portfolio />;
    }
    if (page === "Resume") {
      return <Resume />;
    }
    if (page === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <>
      <Header page={page} handlePageChange={handlePageChange} />

      {showPage()}
      <Footer />
    </>
  );
}

export default App;
