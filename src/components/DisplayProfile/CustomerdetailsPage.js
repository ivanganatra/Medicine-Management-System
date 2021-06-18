import Avatar from '../../assets/images/OIP.jpg'
import {Container} from'react-bootstrap'
import React, { Component } from 'react'
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCustProfile from '../DisplayProfile/Customerdetails'

class ownerPage extends Component{
    render(){
        return (
            <>
            <Container fluid className="container1 Profile">
              <div className="logocont">
                <h1 className="head">Hello,Customer</h1>
                <img src={Avatar} alt="Customerimg" className="avatarimg"/>
              </div>
              <div className="form1">
                  <DisplayCustProfile className="form1"/>
              </div>
            </Container>
            </>
          );
    };
}

export default ownerPage
