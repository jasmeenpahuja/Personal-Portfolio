/*
    File Name: App.js
    Student's Name: Jasmeen
    Student ID: 301418041
    Date: 2024-05-31
*/
import React from "react";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import Services from "./pages/Services";
import Contact from "./pages/contact";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route path="/projects" element={<Projects />} />
                <Route
                    path="/services"
                    element={<Services />}
                />
            </Routes>
        </Router>
    );
}
 
export default App;