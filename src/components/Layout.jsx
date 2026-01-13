import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer'; // Import the Footer we just fixed

const Layout = () => {
  const location = useLocation();
  
  // We only want the Slider (Hero Section) to show on the Home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="site-wrapper">
      {/* 1. TOP ALERT BAR (from Header.css) */}
      <Header />
      
      {/* 2. NAVIGATION (from Navbar.css) */}
      <Navbar />
      
      {/* 3. HERO SLIDER - Only shows on Home */}
      {isHomePage && <Slider />}
      
      {/* 4. MAIN CONTENT (Pages like Fee, Tracks, etc.) */}
      <main>
        <Outlet />
      </main>
      
      {/* 5. REMOVED: UsefulLinks (This was causing the double footer) */}
      
      {/* 6. FINAL PREMIUM FOOTER (Solid Black & Orange) */}
      <Footer />
    </div>
  );
};

export default Layout;