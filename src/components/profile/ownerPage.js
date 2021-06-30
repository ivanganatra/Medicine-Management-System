import Avatar from '../../assets/images/OIP.jpg'
import {Container} from'react-bootstrap'
import Form from './FormCustomer'
import React, { Component } from 'react'
import Form1 from './Formshop'
import Shop from '../../assets/images/Shop.jpeg'
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "../DisplayProfile/Profiledisplay";

class ownerPage extends Component{
    render(){
        return (
            <>
            <h1 className="heading">Personal Details</h1>
            <Container fluid className="container1 Profile">
              <div className="logocont">
                <h1 className="head">Hello, Seller</h1>
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form">
                <Form className="form"/>
              </div>
            </Container>
            <h1 className="heading1">Shop Details</h1>
            <Container style={{marginTop: "0px"}} fluid className="container1 Profile">
              <div className="addform">
                <Form1/>
              </div>
              <img src={Shop} alt="Customerimg" className="shopimg"/>
            </Container>
            </>
          );
    };
}

export default ownerPage
