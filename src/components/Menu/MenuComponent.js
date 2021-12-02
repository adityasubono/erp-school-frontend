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


function MenuComponentRoleAdmin() {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link text-white font-weight-light" href="/dashboard">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    School Setup
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Portal Notes</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Marking Periods</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Calenders</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Periods</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Grade Level</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Sections</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Rooms</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">School</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Courses</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Students
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Add a Student</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Group Assign Student Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Re Enroll</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Users
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Preferences</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Report</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Parent</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Staf</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Teacher Program</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Scheduling
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">View Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Request</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Group Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Group Requests</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Group Drops</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a>
                        {/*<ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Schoolwide Schedule Report</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Print Schedules</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Print Class Lists</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Print Class Pictures</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Print Requests</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Schedule Report</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Request Report</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Unfilled Requests</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Incomplete Schedules</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*    <li><a className="dropdown-item text-dark font-weight-light" href="#">Add / Drop Report</a></li>*/}
                        {/*    <li><hr className="dropdown-divider bg-white"/></li>*/}
                        {/*</ul>*/}
                    </li>

                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Grades
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Report Cards</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Transcripts</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Utilities</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Attendance
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Administration</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Add Absences</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Utilities</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
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
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Add Activity</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
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

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tools
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Access Log</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Delete Log</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Rollover</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Backup Database</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Data Import Utility</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                </ul>
            </li>
        </>
    )
}

function MenuComponentRoleTeacher() {
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
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Marking Periods</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Calender</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Courses</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Students
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Associated Parents</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Report</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Info
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">My Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Prefences</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Scheduling
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">View Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Grades
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Input Final Grades</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Report Cards</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Gradebook</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Reports</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Setup</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Attendance
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Take Attendance</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Attendace Chart</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Absense Summary</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Extracurricular
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Enter Extracurricular</a></li>
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
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Sent Message</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Trash</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Groups</a></li>
                </ul>
            </li>
        </>
    )
}

function MenuComponentRoleHeadmaster() {
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

function MenuComponentRoleLibary() {
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

function MenuComponentRoleFinancial() {
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

function MenuComponentRoleOperational() {
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

function MenuComponentRoleParent() {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link text-white font-weight-light" href="/dashboard">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Students
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Change Password</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Info
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">My Info</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Prefences</a></li>
                </ul>
            </li>

            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white font-weight-light" href="#"
                   id="navbarScrollingDropdown"
                   role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Scheduling
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Schedule</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Student Request</a></li>
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
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Report Cards</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Progress Report</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Transcript</a></li>
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
                    Messaging
                </a>
                <ul className="dropdown-menu bg-info" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Inbox</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Compose</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Sent Message</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Trash</a></li>
                    <li><hr className="dropdown-divider bg-white"/></li>
                    <li><a className="dropdown-item text-dark font-weight-light" href="#">Group</a></li>>
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
                <MenuComponentRoleTeacher />
            </>
        );
    }


    if (roles == "ROLE_ADMIN") {
        return (
            <>
                <MenuComponentRoleAdmin />
            </>
        );
    }

    if (roles == "ROLE_FINANCIAL") {
        return (
            <>
                <MenuComponentRoleFinancial />
            </>
        );
    }


    if (roles == "ROLE_HEADMASTER") {
        return (
            <>
                <MenuComponentRoleHeadmaster />
            </>
        );
    }


    if (roles == "ROLE_OPERATIONAL") {
        return (
            <>
                <MenuComponentRoleOperational />
            </>
        );
    }


    if (roles == "ROLE_LIBRARY") {
        return (
            <>
                <MenuComponentRoleLibary />
            </>
        );
    }

    if (roles == "ROLE_PARENT") {
        return (
            <>
                <MenuComponentRoleParent />
            </>
        );
    }

}

export default MenuComponent;
