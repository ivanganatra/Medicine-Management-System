import Avatar from '../../assets/images/OIP.jpg';
import Form from './FormCustomer';
import React, { Component } from 'react';

class customerPage extends Component{4
    render(){
        return (
            <>
<<<<<<< HEAD
            <div className="container Profile"> 
              <div>
                <h1 className="head">Hello,Customer</h1>
=======
            <div className="container1 Profile"> 
              <div className="logocont">
                <h1 className="head">Hello, Customer</h1>
>>>>>>> jatin
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form">
                <Form className="form"/>
              </div>
            </div>
            </>
          );
    };
}

export default customerPage

