import React from 'react'
import {BrowserRouter as Router, Routes,Link, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
export default function App22() {
  return (
    <div>
        <Router>
            <p>
                <Link to="/home"><FaHome/>Home</Link>   |<Link to="/about">About</Link>|
                <Link to="/contact"> <FaPhoneAlt />Contact</Link> <Link to="/login">Login</Link>
            </p>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    </div>
  )
}
