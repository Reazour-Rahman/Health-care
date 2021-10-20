import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
/* ght auth */
    const {  handleUserLogIn , handleGoogleLogIn, user, error} = useAuth();

/* form */
    const handleSubmit = e => {
        e.preventDefault();
    }
/* Email value */
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
/* Password value */
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
/* Email log in function */
    const handleLogIn = () => {
        handleUserLogIn(email, password)
    }
/* redirect Location */
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () => {
        handleGoogleLogIn()
        .then((result) => {
            history.replace(from);
        })
    };


    if (user.email) {
        history.push(from);
    }


    

/* Modal */
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

/* Alert */
const [openAlert, setOpenAlert] = React.useState(true);

    
    return (
        <div className="bg-img">
            <div className="login-box mt-4 mt-md-4">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="user-box">
                    <input onBlur={handleEmailChange} type="text" name="" required=""/>
                    <label>UserE-mail</label>
                    </div>
                    <div className="user-box">
                    <input onBlur={handlePasswordChange} type="password" name="" required=""/>
                    <label>Password</label>
                    </div>
                    <a onClick={handleLogIn} href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Log In
                    </a>
                    {/* Alert message */}
                    {error.message  ? <Box sx={{ width: '100%' }}>
                            <Collapse in={openAlert}>
                                <Alert
                                action={
                                    <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpenAlert(false);
                                    }}
                                    >
                                    <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                                >
                                Error (auth / user-not-found) Please try again via actual info!
                                </Alert>
                            </Collapse>
                        </Box>
                    :<span></span>}
                </form>
                <div className="">
                <button onClick={googleSignIn} style={{width:"150px"}} className="btn btn-dark me-2" type="submit"><i className="fab fa-google"></i></button>

                <button onClick={handleOpen} style={{width:"150px"}} className="btn btn-dark ms-2" type="submit"><i className="fab fa-twitter"></i></button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Important Notice
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Twitter is implementing soon, You may try with Google ! Google was required
                    </Typography>
                    </Box>
                </Modal>
{/* toggle */}
                <div className="text-center mt-3"><Link to="/register">No account? Please Sign Up</Link></div>
                </div>
            </div>
            <br /><br />
        </div>
    );
};

export default Login;


