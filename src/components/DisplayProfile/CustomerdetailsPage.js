import Avatar from '../../assets/images/OIP.jpg'
import {Container} from'react-bootstrap'
import React, { Component } from 'react'
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayCustProfile from '../DisplayProfile/Customerdetails'

class ownerPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            c_id:"",
            o_id:"",
        };
    }
    render(){
        return (
            <>
            <Container fluid className="container1 Profile">
              <h1 className="txt">Personal details</h1>
              <div className="form1">
                  <DisplayCustProfile className="form1"/>
              </div>
              {
                  this.state.c_id==this.state.o_id?
                  (<button className="button1">EDIT</button>):<div></div>
              }
            </Container>
            </>
          );
    };
}

export default ownerPage
