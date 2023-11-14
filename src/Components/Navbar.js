import React from 'react';
import { FaHome, FaBook, FaFlask, FaTrophy, FaBell, FaUser } from 'react-icons/fa';
import '../App.css';

const Navbar = () => {
    
    return (
        <div className="navbar">
            <span className="teacher-text">My Favorite Teacher</span>
            
            <div className="navbar-icons">
                <div className="icon">
                    <FaHome />
                    <span className="icon-label">Dashboard</span>
                </div>
                <div className="icon">
                    <FaBook />
                    <span className="icon-label">Courses</span>
                </div>
                <div className="icon">
                    <FaFlask />
                    <span className="icon-label">Learning Lab</span>
                </div>
                <div className="icon">
                    <FaTrophy />
                    <span className="icon-label">Achievements</span>
                </div>
            </div>
            
            <div className="profile-icons">
                <FaBell />
                <FaUser className="user-icon" />
            </div>
        </div>
    );
}

export default Navbar;
