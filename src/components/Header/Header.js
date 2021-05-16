import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectUserData,
    LOGOUT
} from '../../reduxSlices/authSlice';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.PNG';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const [scrolled, setScrolled] = useState(false);
    const userData = useSelector(selectUserData);

    window.onscroll = () => {
        if(window.scrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    return (
        <div className={"Header " + (scrolled ? "Header_BoxShadow" : "")}>
            <div className="Header_Container">
                <div className="Header_Logo">
                    <Link to="/" >
                        {
                            <img src={Logo} alt="Logo" />
                        }
                    </Link>
                </div>
                <div className="Header_SideMenuBtn">
                    <IconButton>
                        <MenuRoundedIcon />
                    </IconButton>
                </div>
                
                <div className="Header_LinksContainer">
                    <ul className="Header_Links">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/orders'>
                                Your Orders
                            </Link>
                        </li>
                        
                        {/* {
                            userData.token ? (
                                userData.category === "customer" ? (
                                    <li>
                                        <Link to="/createOrders">
                                            Create Order
                                        </Link>
                                    </li>
                                ) : (
                                    <li>
                                        <Link to="/"
                                    </li>
                                )
                            ) : null
                        } */}
                        
                        <li>
                            <Link to="/Blog">
                                Blog
                            </Link>
                        </li>
                    </ul>
                    <div className="Header_Buttons">
                        {/* <button className="Header_CreateAcc">Create Account</button> */}
                        
                            {
                                !userData.token ? (
                                    <Link to='/login'>
                                        <button className="Header_Login Green_Button">SignIn / SignUp
                                        </button> 
                                    </Link>
                                ) : 
                                <button onClick={() => dispatch(LOGOUT())} className="Header_Login Green_Button">Logout</button>
                            }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;