import React, { useState } from "react";
import NavBar from "./pages/NavBar";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";

import Footer from "./pages/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return (
        <AboutMe
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      );
    }

    if (currentPage === "Projects") {
      return <Projects />;
    }
  };

  return (
    <body>
      <div className="container-fluid g-0 p-0">
        {/* We are passing the currentPage from state and the function to update it */}
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
        <Footer />
      </div>
    </body>
  );
}
