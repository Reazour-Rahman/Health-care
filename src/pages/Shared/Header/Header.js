import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'

const Header = () => {
    /* get auth */
    const {user, handleLogOut} = useAuth();

    return (
        <div>
            <nav style={{backgroundColor:"#111F33"}} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img style={{width:"180px", height:"50px"}} className="navbar-brand" src={logo} alt="" />
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* navs */}  
                    <Link  to="/home" className="nav-link active text-white" aria-current="page"><Button className="rounded-0 text-white" variant="outlined">Home</Button></Link>
                    <Link to="/about" className="nav-link active text-white" aria-current="page"><Button className="rounded-0 text-white" variant="outlined">About</Button></Link>
                    <a className="nav-link active text-white" aria-current="page" href="#services"><Button className="rounded-0 text-white" variant="outlined">Services</Button></a>
                    <Link to ="contact" className="nav-link active text-white" aria-current="page"><Button className="rounded-0 text-white" variant="outlined">Contact</Button></Link>
                    
                {/* Log in and Register */}
                </ul>
                <form className="d-flex">
                    <Link to="/register" className="text-white me-md-5"><Button className="rounded-0 bg-white text-primary" variant="contained">Register</Button></Link>

                    {user.email ? <div>
                    
                    <Link to="/" onClick={handleLogOut} className="text-white"><Button className="rounded-0 bg-white text-primary" variant="contained">{user.displayName} &nbsp;&nbsp;<i className="fas fa-sign-out-alt"></i></Button></Link></div>:
                    
                    <Link to="login" className="text-white"><Button className="rounded-0 bg-white text-primary" variant="contained">Sign in</Button></Link>}

                </form>
                </div>
            </div>
            </nav>           
        </div>
    );
};

export default Header;
