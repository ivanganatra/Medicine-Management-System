import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ASYNC_LOGIN } from '../../reduxSlices/authSlice';
import './Login.css';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '10px',
      '& .MuiInputLabel-formControl ': {
        top: '-6px',
        fontSize: '18px',
        color: 'gray',
        // fontWeight: 'bold'
      },
      '& .MuiInputBase-input::placeholder': {
        fontSize: '14px'
      },
      '& .MuiFormLabel-filled': {
          backgroundColor: 'transparent !important'
      },
      '& .MuiInputBase-root': {
          paddingBottom: '5px'
      },
      '& .MuiSelect-root': {
          paddingBottom: '0px',
          fontSize: '16px'
      },
      '& > .MuiButtonBase-root': {
        width: '90%',
        marginTop: '20px !important'
       },
    },
    margin: {
      margin: theme.spacing(2),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '100%',
    }
}));

const SignUp = () => {
    const classes = useStyles();
    const [isSignIn, setIsSignIn] = useState(false);
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        email: '',
        category: '',
        password: '',
        contact: '',
        showPassword: false
      });
    
    const handleChange = (prop) => (event) => {
      if(prop === 'contact' && (isNaN(event.target.value) && event.target.value !== '+')) {
        return;
      }
      setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log("Inside form submit");
      dispatch(ASYNC_LOGIN({
        email: values.email,
        password: values.password,
        category: values.category,
        isSignIn: isSignIn,
        contact: values.contact,
      }))
    }

    return (
        <div className="Login">
            <h1 className="Login_Title">{ isSignIn ? "Sign In" : "Sign Up" }</h1>
            <form className={classes.root}>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel  htmlFor="email">Email</InputLabel>
                        <Input
                            placeholder="Type your email"
                            fullWidth
                            id="email"
                            type="email"
                            margin="normal"
                            value={values.username}
                            onChange={handleChange('email')}
                            startAdornment={
                                <InputAdornment position="start">
                                  <PermIdentityIcon />
                                </InputAdornment>
                              }
                        />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField, classes.formControl)}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                        fullWidth
                        placeholder="Type your password"
                        id="password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        
                        onChange={handleChange('password')}
                        startAdornment={
                            <InputAdornment position="start">
                              <LockOutlinedIcon />
                            </InputAdornment>
                          }
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                {
                  !isSignIn ? (
                    <>
                      <FormControl className={clsx(classes.margin, classes.textField, classes.formControl)}>
                        <InputLabel id="category">Select your Category</InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            value={values.category}
                            onChange={handleChange('category')}
                        >
                        <MenuItem value="owner">Owner</MenuItem>
                        <MenuItem value="customer">Customer</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel  htmlFor="contact">Contact Number</InputLabel>
                            <Input
                                placeholder="Type your Contact Number"
                                fullWidth
                                id="contact"
                                type="text"
                                margin="normal"
                                value={values.contact}
                                onChange={handleChange('contact')}
                                startAdornment={
                                    <InputAdornment position="start">
                                      <ContactPhoneOutlinedIcon />
                                    </InputAdornment>
                                  }
                            />
                    </FormControl>
                  </>
                  ) : null
                }
                
                <Button onClick={formSubmitHandler}  variant="contained" color="primary">
                  {
                    isSignIn ? "Sign In": "Sign Up" 
                  }
                </Button>
            </form>
            <div className="Login_Options">
              <p>{ !isSignIn ? "Already Have an account" : "Don't Have an Account?" }</p>
                 {
                   !isSignIn ? <Button onClick={() => setIsSignIn(true)} >Sign In</Button> : <Button onClick={() => setIsSignIn(false)}>Sign Up</Button>
                 }
            </div>
        </div>
    )
}

export default SignUp;