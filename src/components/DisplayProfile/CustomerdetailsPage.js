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
            <Container fluid className="displaycontainer1 Profile">
              <h1 className="displaytxt">Personal details</h1>
              <div className="displayform1">
                  <DisplayCustProfile className="displayform1"/>
              </div>
              {
                  this.state.c_id==this.state.o_id?
                  (<button className="displaybutton1">EDIT</button>):<div></div>
              }
            </Container>
            </>
          );
    };
}

export default ownerPage
