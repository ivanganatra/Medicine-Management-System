import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ASYNC_LOGIN, selectUserData, SET_ERROR_NULL } from '../../reduxSlices/authSlice';
import './Login.css';

import CircularProgress from '@material-ui/core/CircularProgress';
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
import FormHelperText from '@material-ui/core/FormHelperText';

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

function validateEmail(email) {
  console.log(email);
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const regex_pass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!#%*?&]{8,20}$/;
  return regex_pass.test(password);
}

const SignUp = () => {
    const classes = useStyles();
    const [isSignIn, setIsSignIn] = useState(true);
    const dispatch = useDispatch();
    const error = useSelector(selectUserData).error;
    const loading = useSelector(selectUserData).loading;
    const [categoryError, setCategoryError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false); 

    const [values, setValues] = useState({
      email: '',
      category: '',
      password: '',
      contact: '',
      showPassword: false
    });

    useEffect(() => {
      dispatch(SET_ERROR_NULL());
      setCategoryError(false);
      setContactError(false);
      setPasswordError(false);
      setEmailError(false);
      setValues({
        email: '',
        category: '',
        password: '',
        contact: '',
        showPassword: false
      })
    }, [isSignIn])

    
    
    const handleChange = (prop) => (event) => {
      if(prop === 'contact' && isNaN(event.target.value)) {
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
      let flag = 0;

      if(!validateEmail(values.email)) {
        setEmailError(true);
        flag = 1;
      } else {
        setEmailError(false);
      }

      if(!validatePassword(values.password)) {
        setPasswordError(true);
        flag = 1;
      } else {
        setPasswordError(false);
      }

      if(!isSignIn && values.contact.length !== 10) {
        setContactError(true);
        flag = 1;
      } else {
        setContactError(false);
      }

      if(!isSignIn && values.category === '') {
        setCategoryError(true);
        flag = 1;
      } else {
        setCategoryError(false);
      }

      if(flag) return;

      dispatch(ASYNC_LOGIN({
        email: values.email,
        password: values.password,
        category: values.category,
        isSignIn: isSignIn,
        contact: values.contact,
        logging: true
      }))
    }

    return (
        <div className="Login">
            <h1 className="Login_Title">{ isSignIn ? "Sign In" : "Sign Up" }</h1>
            <form className={classes.root}>
                <FormControl error={emailError} className={clsx(classes.margin, classes.textField)}>
                    <InputLabel  htmlFor="email">Email</InputLabel>
                        <Input
                            placeholder="Type your email"
                            fullWidth
                            id="email"
                            type="email"
                            margin="normal"
                            value={values.email}
                            onChange={handleChange('email')}
                            startAdornment={
                                <InputAdornment position="start">
                                  <PermIdentityIcon />
                                </InputAdornment>
                              }
                        />
                        {
                          emailError ? <FormHelperText>Enter a valid Email ID</FormHelperText> : null
                        }
                        
                </FormControl>
                <FormControl error={passwordError} className={clsx(classes.margin, classes.textField, classes.formControl)}>
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
                    {
                      passwordError ? <FormHelperText>Password must have at least 1 number 1 uppercase and lowercase character, 1 special symbol and between 8 to 20 characters</FormHelperText> : null
                    }
                    
                </FormControl>
                {
                  !isSignIn ? (
                    <>
                      <FormControl error={categoryError} className={clsx(classes.margin, classes.textField, classes.formControl)}>
                        <InputLabel id="category">Select your Category</InputLabel>
                        <Select
                            labelId="category"
                            id="demo-simple-select-error"
                            value={values.category}
                            onChange={handleChange('category')}
                        >
                        <MenuItem value="owner">Owner</MenuItem>
                        <MenuItem value="customer">Customer</MenuItem>
                        </Select>
                        {
                          categoryError ? <FormHelperText>Please select a category</FormHelperText> : null
                        }
                        
                    </FormControl>
                    <FormControl error={contactError} className={clsx(classes.margin, classes.textField)}>
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
                            {
                              contactError ? <FormHelperText>Enter a Valid Contact Number (10 digits only)</FormHelperText> : null
                            }
                            
                    </FormControl>
                  </>
                  ) : null
                }

                {
                  loading ? <CircularProgress /> : error ? <p className="text-center text-danger mb-0 mt-3">{error}</p> : null
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