import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Solutions from './components/Solutions';
import SchedulingAutomation from './components/SchedulingAutomation';
import StaffTraining from './components/StaffTraining';
import BillingRevenue from './components/BillingRevenue';
import Technology from './components/Technology';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop'; // Import the new component

// Import new resource components (removed case study)
import BlogPost1 from './components/resources/BlogPost1';
import Whitepaper1 from './components/resources/Whitepaper1';
import BlogPost2 from './components/resources/BlogPost2';
import BlogPost3 from './components/resources/BlogPost3';
import BlogPost4 from './components/resources/BlogPost4';
import BlogPost5 from './components/resources/BlogPost5';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Render the ScrollToTop component here */}
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/scheduling" element={<SchedulingAutomation />} />
            <Route path="/solutions/training" element={<StaffTraining />} />
            <Route path="/solutions/billing" element={<BillingRevenue />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* New resource routes (removed case study) */}
            <Route path="/resources/blog-post-1" element={<BlogPost1 />} />
            <Route path="/resources/whitepaper-1" element={<Whitepaper1 />} />
            <Route path="/resources/blog-post-2" element={<BlogPost2 />} />
            <Route path="/resources/blog-post-3" element={<BlogPost3 />} />
            <Route path="/resources/blog-post-4" element={<BlogPost4 />} />
            <Route path="/resources/blog-post-5" element={<BlogPost5 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

