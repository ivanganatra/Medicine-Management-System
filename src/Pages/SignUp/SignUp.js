import React, { useState } from 'react';
import './SignUp.css';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
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
    const [values, setValues] = useState({
        username: '',
        category: '',
        password: '',
        contact: '',
        showPassword: false
      });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <div className="SignUp">
            <h1 className="SignUp_Title">Sign Up</h1>
            <form className={classes.root} autoComplete="off">
                <FormControl className={clsx(classes.margin, classes.textField)}>
                    <InputLabel  htmlFor="username">Username</InputLabel>
                        <Input
                            placeholder="Type your username"
                            fullWidth
                            id="username"
                            type="text"
                            margin="normal"
                            value={values.username}
                            onChange={handleChange('username')}
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
                <Button variant="contained" color="primary">
                    SIGN UP
                </Button>
            </form>
        </div>
    )
}

export default SignUp;