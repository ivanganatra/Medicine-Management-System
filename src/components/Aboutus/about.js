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
import MedicineStore from '../../assets/images/medicine-store.png';
import ClickAndCollect from '../../assets/images/ClickAndCollect.png';
import ScanOrder from '../../assets/images/ScanOrder.png';
import Discount from '../../assets/images/Discount.png';
import { Link as Link1 } from "react-scroll";
import {Element} from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import Button from '@material-ui/core/Button';
const About = () => {
    console.log("ABOUT O SECTION");
    const abc="about o section";
    return (
        <div class="about">
                <section class="section__features">
                    <div class="section-1">
                    <div class="first-box">
                        <h2>Vision and Mission</h2>
                        <p>
                        Control your medical needs like never before.<br></br>
                        We link your orders with potential sellers to make your work easy.
                        <br></br>
                        <br></br>
                        <Button class="Green_Button">
                            <Link2 to="About Us">Know Us
                            </Link2>
                            </Button>
                        </p>
                    </div>
                    </div>
                    <Element id="About Us" name="About Us">
                    <div class="grid__layout">
                            <div class="feature__card">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <img id="Easy-Connect-img" src={MedicineStore} alt="img" />
                                        </div>
                                        <div class="flip-card-back">
                                        <p>Technology connects us to the whole world, we connect you to the medicine store nearby you.</p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Easy connect</h3>
                            </div>
                            <div class="feature__card">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <img src={ClickAndCollect} alt="img" />
                                        </div>
                                        <div class="flip-card-back">
                                        <p>Stop worrying for the shipping charges, book your medicine and collect from the closest store as per your convenience.</p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Click and Collect</h3>
                            </div>
                            <div class="feature__card">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <img src={Discount} alt="img"/>
                                        </div>
                                        <div class="flip-card-back">
                                        <p>Get upto 40% discounts on your first buy, and 20% off on next three orders. </p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Buy more  less</h3>
                            </div>
                            <div class="feature__card">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                        <img src={ScanOrder} alt="img"/>
                                        </div>
                                        <div class="flip-card-back">
                                        <p>Just upload the clear picture of the doctor's prescription and sumbit your order.</p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Scan your Order</h3>
                            </div>

                        </div>
                    </Element>
                </section>
                {/* <section class="section__cards">
                    <h2>Latest Articles</h2>
                    <div class="grid__layouts">
                        <div>
                            <img src="./image-confetti.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </div>
                        <div>
                            <img  src="./images/image-currency.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </div>
                        <div>
                            <img src="./images/image-plane.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </div>
                        <div>
                            <img src="./images/image-restaurant.jpg" alt="img"/>
                            <figcaption>By Claire Robinson
                                <h4>Receive money in any currency with no fees</h4>
                                <p>The world is getting smaller and we’re becoming more mobile. So why should you be
                                forced to only receive money in a single …</p>
                            </figcaption>
                        </div>
                    </div>
                </section> */}
        </div>
    )
}

export default About;