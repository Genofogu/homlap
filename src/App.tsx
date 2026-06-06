/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import ContactPage from "./pages/ContactPage";
import ListPropertyPage from "./pages/ListPropertyPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-homlap selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/coming-soon" 
            element={<ComingSoonPage title="App Coming Soon." desc="We're working hard to bring the HOMLAP mobile experience to iOS and Android. Stay tuned!" />} 
          />
          <Route 
            path="/list" 
            element={<ComingSoonPage title="Listing Interface Soon." desc="Want to list your property? We're finalizing our owner dashboard. It will be available very soon!" />} 
          />
          <Route 
            path="/list-property" 
            element={<ListPropertyPage />} 
          />
          <Route 
            path="/search" 
            element={<ComingSoonPage title="Search Coming Soon." desc="Our advanced property search and filtering system is currently under development." />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          <Route path="/:slug" element={<CityPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
