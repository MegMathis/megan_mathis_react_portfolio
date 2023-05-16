// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
// import Contact from "./components/Contact";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <Header />
//       <Routes>
//         <Route path="/" element={<AboutMe />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("AboutMe");

  const showPage = () => {
    switch (page) {
      case "AboutMe":
        return <AboutMe />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
    }
  };

  return (
    <>
      <Header page={page} setPage={setPage} />

      {showPage()}
      <Footer />
    </>
  );
}

export default App;
