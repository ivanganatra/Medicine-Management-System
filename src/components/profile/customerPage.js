import Avatar from '../../assets/images/OIP.jpg';
import Form from './FormCustomer';
import {Container} from'react-bootstrap'
import React, { Component } from 'react';

class customerPage extends Component{

    render(){
        return (
            <>
            <Container fluid className="container1 Profile"> 
              <div className="logocont">
                <h1 className="head">Hello, Customer</h1>
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form">
                <Form className="form"/>
              </div>
            </Container>
            </>
          );
    };
}



export default customerPage;

