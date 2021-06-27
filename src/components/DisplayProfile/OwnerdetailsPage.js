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
            <Container fluid className="container1 Profile">
              <h1 className="txt">Personal details</h1>
              <div className="form1">
                <DisplayOwnerProfile className="form1"/>
              </div>
              <h1 className="txt">Shop details</h1>
              <div className="addform1">
                <DisplayShopProfile/>
              </div>
              {
                  this.state.c_id==this.state.o_id?
                  (<button className="button1">Update Details</button>):<div></div>
              }
            </Container>
            </>
          );
    };
}

export default ownerPage
