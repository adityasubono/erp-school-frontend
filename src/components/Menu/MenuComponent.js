import React from 'react';

function MenuComponentRoleStudent() {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link text-white font-weight-light" href="/dashboard">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    School Info
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">School Information</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Calender</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Schedule
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">My Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">My Request</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Schedule Report</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Grades
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Gradebook Grades</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Final Grades</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Progress Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Transcripts</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">GPA Class Rank</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Attendance
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Absences</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Daily Summary</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Extracurricular
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Screen</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student List</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Messaging
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Inbox</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Compose</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Send Message</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Trash</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Groups</a></li>
                </ul>
            </li>
        </>
    )
}

function MenuComponent({roles}) {

    if (roles == "ROLE_STUDENT") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }


    if (roles == "ROLE_TEACHER") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }


    if (roles == "ROLE_ADMIN") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }

    if (roles == "ROLE_FINANCIAL") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }


    if (roles == "ROLE_HEADMASTER") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }


    if (roles == "ROLE_OPERATIONAL") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }


    if (roles == "ROLE_LIBRARY") {
        return (
            <>
                <MenuComponentRoleStudent />
            </>
        );
    }

}

export default MenuComponent;
