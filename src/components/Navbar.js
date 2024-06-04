/*
    File Name: ./components/Navbar.js
    Student's Name: Jasmeen
    Student ID: 301418041
    Date: 2024-05-31
*/
 
import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
;