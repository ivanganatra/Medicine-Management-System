import Avatar from '../../assets/images/OIP.jpg'
import Form from './FormCustomer'
import React, { Component } from 'react'
import Form1 from './Formshop'
import Shop from '../../assets/images/Shop.jpeg'

class ownerPage extends Component{4
    render(){
        return (
            <>
            <div className="container"> 
              <div>
                <h1 className="head">Hello,Seller</h1>
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form">
                <Form className="form"/>
              </div>
            </div>
            <div className="container">
              <div className="addform">
                <Form1/>
              </div>
              <img src={Shop} alt="Customerimg" className="shopimg"/>
            </div>
            </>
          );
    };
}

export default ownerPage
