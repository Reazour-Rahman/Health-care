import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css'
import { useHistory, useLocation } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@restart/ui/esm/Button';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

/* get auth */
    const { handleUserRegister, handleGoogleLogIn,handleNameChange,user } = useAuth();



/* form */
    const handleSubmit = e => {
        e.preventDefault();
    }
/* email value */
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
/* password value */
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
/* email btn */
    const handleRegister = () => {
        handleUserRegister(email, password);
        handleClick()
    }

    /* Redirect */
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogleLogIn()
        .then((result) => {
            history.replace(from);
        })
    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  /* modal */
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
    

    return (
        <div className="bg-img">
            {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sign Up and Sign in succeeded, Go to home for Service details again"
        action={action}
      />
            <div className="login-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                    <input required onBlur={handleNameChange} type="text" name=""/>
                    <label>Username</label>
                    </div>
                    <div className="user-box">
                    <input required onBlur={handleEmailChange} type="text" name=""/>
                    <label>Email</label>
                    </div>
                    <div className="user-box">
                    <input required onBlur={handlePasswordChange} type="password" name=""/>
                    <label>Password</label>
                    </div>
                    <a onClick={handleRegister} href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </a>
                    {/* <button onClick={handleRegister} type="submit">Sign Up</button> */}
                </form>
                <div className="mt-2">
                <button style={{width:"150px"}} className="btn btn-dark me-2" onClick={googleSignIn} type="submit"><i className="fab fa-google"></i></button>
                
                </div>
                {/* toggle */}
                <div className="text-center mt-3"><Link to="/login">Already have an account?</Link></div>
            </div>
        <br /><br />
        </div>
    );
};

export default Register;
