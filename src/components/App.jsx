import React from 'react';
import '../assets/css/app.css';

/* Components */
import Sidebar from "./Sidebar"
import NavBar from "./NavBar"
import ContentRowTop from "./ContentRowTop"
import Footer from "./Footer"

export default function App() {
  return (
    <div id="wrapper">

      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">

          <NavBar />

          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <ContentRowTop />

          </div>
        </div>

        <Footer />

      </div>
      <hr />
    </div>
  );
}