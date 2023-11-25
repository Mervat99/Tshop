import React from 'react'
import Navbar from '../components/web/navbar/Navbar.jsx';
import Footer from '../components/web/footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

// we put on layout fixed component
export default function Layout() {
  return (
    <>
    <Navbar />
    {/* outlet means get the component that called you */}
    <Outlet/>
    <Footer />
    </>
  )
}
