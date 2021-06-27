import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
    selectUserData,
    LOGOUT
} from '../../reduxSlices/authSlice';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.PNG';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import IconButton from '@material-ui/core/IconButton';
import './about.css';
import Sidedrawer from '../Sidedrawer/Sidedrawer';

const About = () => {
    console.log("ABOUT O SECTION");
    const abc="about o section";
    return (
        <div class="about">
                <section class="section__features">
                    <div class="first-box">
                        <h2>Why should you choose MedEasy?</h2>
                        <p>We link your orders to potential sellers to make your work easy. <br></br>
                        Control your medical needs like never before.</p>
                    </div>
                    <div class="grid__layout">
                        <div class="feature__card">
                            <img src="./images/icon-api.svg" alt="img" />
                            <h3>World-Wide access</h3>
                            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                        <div class="feature__card">
                            <img src="./images/icon-budgeting.svg" alt="img"/>
                            <h3>Simple Budgeting</h3>
                            <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                                <h3>World-Wide access</h3>
                            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                        <div class="feature__card">
                            <img src="./images/icon-onboarding.svg" alt="img"/>
                            <h3>Fast Onboarding</h3>
                            <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p> -->
                            <h3>World-Wide access</h3>
                            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                        </div>
                        <div class="feature__card">
                        <img src="./images/icon-online.svg" alt="img"/>
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                        <h3>World-Wide access</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances
                            wherever you are in the world.</p>
                        </div>
                    </div>
                </section>
                <section class="section__cards">
                    <h2>Latest Articles</h2>
                    <div class="grid__layouts">
                        <figure>
                            <img src="./images/image-confetti.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img  src="./images/image-currency.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="./images/image-plane.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </figure>
                        <figure>
                            <img src="./images/image-restaurant.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div class="card__card">
                        <img src="./images/" alt="img"/>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="card__card">
                        <img src="./images/" alt="img"/>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="card__card">
                        <img src="./images/" alt="img"/>
                        <h4></h4>
                        <p></p>
                    </div>
                    <div class="card__card">
                        <img src="./images/" alt="img"/>
                        <h4></h4>
                        <p></p>
                    </div>
                </section>
        </div>
    )
}

export default About;