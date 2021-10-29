import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    selectUserData
} from '../../reduxSlices/authSlice';
import db from '../../firebase';
import './LandingPage.css';
import Button from '@material-ui/core/Button';
import HomeImg from '../../assets/images/HomepageImg3.jpeg';

const LandingPage = () => {
    return (
        <div className="Home">
            <div className="Home_Header">
                <div className="Home_Img">
                    <img src={HomeImg} alt="image" />
                </div>
                <div className="Home_Intro">
                    <div className="Home_Med1">
                        <h1>Medical Services Made Easy</h1>
                        <p>Take your medical hassle online. Your MedEasy account will be a one-stop place for searching right stores for your medicine needs.</p>
                        <Button className="Green_Button" color="primary" variant="contained">
                            Learn More
                        </Button>
                    </div>
                    <br></br>
                    <div className="Home_Med2">
                        <p>We link your orders to potential sellers to make your work easy. <br />Control your medical needs like never before.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;