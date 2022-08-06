import { Avatar, Box, Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import shampoLogo from '../../../images/natural-spa-logo-icon-illustration-natural-spa-logo-icon-illustration-design-beauty-vector-beautiful-hair-face-abstract-woman-169355091-removebg-preview (1).png'
import useAuth from '../../Hooks/useAuth';
import "./NavBar.css";
const NavBar = () => {
    const {user,logoutUser,}=useAuth();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            <img src={shampoLogo} alt="" style={{marginRight:"6px"}} width="50"/>
            <Typography variant="h4" component="div">
              Shivo
            </Typography>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/explore"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                  >Explore
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/dashboard" 
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                Dashbpard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
      
                {
                   user?.email &&  <Box style={{display:'flex',alignItems:'center',justifyContent:"left"}}>
                       <Avatar aria-label="recipe" style={{marginLeft:"10px"}}>
                   <img src={user.photoURL} alt="" width="40"  />
                    </Avatar>
                    <Typography  style={{marginLeft:"7px"}} variant="subtitle2" >{user?.displayName}</Typography>
                   </Box>
               }
                       {
                  user?.email? <Button color="primary"  onClick={logoutUser}  className='nav-links'>LOGOUT</Button>:<Link to="/login" >
                  <Button color="inherit"   className='nav-links'>LOGIN</Button>
              </Link>
                 
               }
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
};

export default NavBar;