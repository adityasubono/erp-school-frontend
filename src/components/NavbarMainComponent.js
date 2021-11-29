import React from 'react';
import './navbar.css'
import NavbarAdminComponent from "./Navbar/NarbarAdminComponent";
import NavbarTeacherComponent from "./Navbar/NavbarTeacherComponent";
import NarbarAdminComponent from "./Navbar/NarbarAdminComponent";
import NavbarComponent from "./Navbar/NavbarComponent";

function NavbarMainComponent({role}) {


    if (role == 'ROLE_TEACHER') {
        return (
            <div>
                <NavbarTeacherComponent />
            </div>
        )
    } else if (role == 'ROLE_STUDENT') {
        return (
            <div>
                <NavbarComponent />
            </div>
        )
    } else if (role == 'ROLE_ADMIN') {
        return (
            <div>
                <NavbarAdminComponent />
            </div>
        )
    } else if (role == 'null'){
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

export default NavbarMainComponent;
