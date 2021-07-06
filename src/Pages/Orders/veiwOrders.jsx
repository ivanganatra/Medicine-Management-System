import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import db from '../../firebase';
import "./Orders.css";
import OrderImg from "../../assets/images/Orders/list11.jpeg";
class ViewOrders extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="main-container" style={{ paddingTop: "95px" }}>
        <div className="container">
          <div className="row p-3 d-flex align-items-center">
            <div className="col-12 col-md-8 px-0">
              <div className="col-12">
                <h1 className="main-heading">Your Orders</h1>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    category: state.auth.category
  }
}

export default connect(mapStateToProps)(withRouter(ViewOrders));