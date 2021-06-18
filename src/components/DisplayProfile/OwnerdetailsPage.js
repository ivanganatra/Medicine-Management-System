import Avatar from '../../assets/images/OIP.jpg'
import {Container} from'react-bootstrap'
import React, { Component } from 'react'
import Shop from '../../assets/images/Shop.jpeg'
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOwnerProfile from '../DisplayProfile/Ownerdetails'
import DisplayShopProfile from '../DisplayProfile/Shopdetails'

class ownerPage extends Component{
    render(){
        return (
            <>
            <Container fluid className="container1 Profile">
              <div className="logocont">
                <h1 className="head">Hello,Seller</h1>
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
                <button className="button1">Order Details</button>
              </div>
              <div className="form1">
                <DisplayOwnerProfile className="form1"/>
              </div>
            </Container>
            <Container fluid className="container1 Profile">
              <div className="addform1">
                <DisplayShopProfile/>
              </div>
              <img src={Shop} alt="Customerimg" className="shopimg"/>
            </Container>
            </>
          );
    };
}

export default ownerPage
