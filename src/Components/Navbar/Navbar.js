import React from 'react'
import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid navigation">
                        <Link to='/'  className="navbar-brand" style={{color:'blue',fontWeight:'bold'}}>TODO APP</Link>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/createprofile' className="nav-link" >Create Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/employers' className="nav-link" >Employees</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/createtask' className="nav-link" >Create Task</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/taskList' className="nav-link" >Task List</Link>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navbar
