import Avatar from '../../assets/images/OIP.jpg'
<<<<<<< HEAD
=======
import {Container} from'react-bootstrap'
>>>>>>> jatin
import Form from './FormCustomer'
import React, { Component } from 'react'
import Form1 from './Formshop'
import Shop from '../../assets/images/Shop.jpeg'
<<<<<<< HEAD

class ownerPage extends Component{4
    render(){
        return (
            <>
            <div className="container Profile"> 
              <div>
                <h1 className="head">Hello,Seller</h1>
=======
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ownerPage extends Component{
    render(){
        return (
            <>
            <Container fluid className="container1 Profile"> 
              <div className="logocont">
                <h1 className="head">Hello, Seller</h1>
>>>>>>> jatin
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form">
                <Form className="form"/>
              </div>
<<<<<<< HEAD
            </div>
            <div className="container Profile">
=======
            </Container>
            <Container style={{marginTop: "0px"}} fluid className="container1 Profile">
>>>>>>> jatin
              <div className="addform">
                <Form1/>
              </div>
              <img src={Shop} alt="Customerimg" className="shopimg"/>
<<<<<<< HEAD
            </div>
=======
            </Container>
>>>>>>> jatin
            </>
          );
    };
}

export default ownerPage
