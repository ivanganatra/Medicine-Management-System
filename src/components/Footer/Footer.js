import React, { Component } from 'react'
import './Footer.css'
import { createPortal } from 'react-dom'
// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from '@iconify/react';
import bxlTwitter from '@iconify-icons/bx/bxl-twitter';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';
import bxlInstagram from '@iconify-icons/bx/bxl-instagram';
import bxlLinkedin from '@iconify-icons/bx/bxl-linkedin';
import { Link as Link1 } from "react-scroll";
import { Link as Link2 } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { matchPath } from "react-router";
let location;
const Footer=()=> {

    location=useLocation().pathname;
    const list_creator=(classname,header,name,id_code,link)=>{
        let loop=0;
        console.log(classname,header,name,link);
        let list_feature=name.map((name)=>{
            let abc="/"+ name.toLowerCase();
            loop+=1;
            let id='item-'+id_code+loop;
            if(classname=="Resource-list")
            {
                // console.log("1", abc,location);

                if(abc==location || (location=="/" && abc=="/home"))
                {
                    // console.log("2", abc,location.length);

                    return(
                        <div key={id} id={id}>
                            <Link1 to="Header"
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                offset={-3000}
                                duration={100}>{name}
                            </Link1>
                        </div>
                    );
                    // return(
                    //     <Link2 to="/">
                    //     {name}
                    //     <br></br>
                    //     </Link2>
                    // );
                }
                else
                {
                    if(abc=="/home")
                    {
                        return(
                            <Link2 to="/">
                            {name}
                            <br></br>
                            </Link2>
                        );

                    }
                    // console.log("3", abc,location);
                    return(
                        <Link2 to={abc}>
                        {name}
                        <br></br>
                        </Link2>
                    );

                }
            }
            else
            {
                return(
                <div key={id} id={id}>
                    <Link1 to={link}
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}>{name}
                    </Link1>
                </div>
                );
            }
        });
        return (
            <div className={classname}>
                <h3>{header}</h3>
                {list_feature}
            </div>
            );
    }
            // <div className="How it Works">
            //     <h3>For Teams</h3>
            //     <div key="item-1"
            // </div>
            let feature=["How it Works","For Teams","Pricing","Templates"];
            let resources=["Home","About","Orders","Profile","Dashboard"];
            let company=["Download Apps","Help Center","Productivity Methods","Refer a friend","Integrations","Channel Partners","Developer API"];
            let list_feature=list_creator("Feature-list","Features",feature,"f","none");
            let list_resource=list_creator("Resource-list","Our Links",resources,"r","Home_Header");
            let list_company=list_creator("Company-list","Company",resources,"c","none");
        return (
            <div className="Footer">
                <div id="statement">
                    <h1>MedEasy</h1>
                    <h4>Join millions of people who wish to have a safe and secure society.</h4>
                </div>
                <div className="list-section">
                {/* All three sections of the list are created by the list_creator */}
                {list_resource}
                {list_feature}
                {list_company}
                <div class="our-info">
                    <h3>Find Us Here</h3>
                    <p>
                        <h7>SGSITS INDORE</h7>
                        <br></br>
                        23, Sir M. Visvesvaraya Marg, Vallabh Nagar, Indore, Madhya Pradesh 452003
                    </p>
                </div>
                </div>

                <div class="social-network margin-space">
                        <div class="before-hline">
                            <h4>Contact</h4>
                            <h4>Our Social Networks</h4>
                        </div>
                        <hr></hr>
                        <div class="after-hline">
                            <div class="contact-details">
                                <div class="contact-number"><img src="./phone.png"></img> +91 8839848727</div>
                                <div class="contact-mail"><img src="./white-email (2).png"></img> ivan.ganatra@gmail.com</div>
                            </div>
                            <div className="social-links ">
                            <Icon icon={bxlTwitter} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                            <Icon icon={bxlFacebook} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                            <Icon icon={bxlInstagram} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical"/>
                            <Icon icon={bxlLinkedin} width="30px" height="30px" rotate="180deg" flip="horizontal,vertical" />
                            </div>
                        </div>
                </div>

            </div>
        );
}
export default Footer