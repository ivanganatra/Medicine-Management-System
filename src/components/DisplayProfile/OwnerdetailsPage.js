import {Container} from'react-bootstrap'
import React, { Component } from 'react'
import '../Header/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayOwnerProfile from '../DisplayProfile/Ownerdetails'
import DisplayShopProfile from '../DisplayProfile/Shopdetails'


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
            <Container className="displaycontainer1 Profile"  style={{justifyContent:"center"}}>
              <h1 className="displaytxt">Personal details</h1>
              <div className="displayform1">
                <DisplayOwnerProfile className="displayform1"/>
              </div>
              <h1 className="displaytxt">Shop details</h1>
              <div className="displayaddform1">
                <DisplayShopProfile/>
              </div>
              {
                  this.state.c_id==this.state.o_id?
                  (<button className="displaybutton1">Update Details</button>):<div></div>
              }
            </Container>
            </>
          );
    };
}

export default ownerPage
