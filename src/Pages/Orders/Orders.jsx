import React, { Component } from 'react';
import "./Orders.css";
import OrderImg from "../../assets/images/Orders/list3.jpeg";
class Orders extends Component {
  state = {}
  render() {
    return (
      <div className="" style={{ paddingTop: "95px" }}>
        <div className="container main-container">
          <div className="row p-3">
            <div className="col-12 col-md-8 px-0">
              <div className="col-12">
                <h1 className="main-heading">Your Orders</h1>
                <hr />
              </div>
              {/* </div>
          <div className="row p-3 pt-5"> */}
              <div className="col-12 pt-4">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-md-3"><span>Order Id</span> </th>
                      <th scope="col" className="ps-md-3"><span>Status</span></th>
                      <th scope="col" className="ps-md-3"><span>Booking Time</span></th>
                      <th scope="col" className="ps-md-3"><span>Description</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-md-3">1</td>
                      <td className="ps-md-3">Mark</td>
                      <td className="ps-md-3">Otto</td>
                      <td className="ps-md-3">@mdo</td>
                    </tr>
                    <tr>
                      <td className="ps-md-3">2</td>
                      <td className="ps-md-3">Jacob</td>
                      <td className="ps-md-3">Thornton</td>
                      <td className="ps-md-3">@fat</td>
                    </tr>
                    <tr>
                      <td className="ps-md-3">3</td>
                      <td className="ps-md-3">Larry the Bird</td>
                      <td className="ps-md-3">Larry the Bird</td>
                      <td className="ps-md-3">@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block px-0">
              <img src={OrderImg} className="pl-5" alt="Not Found" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;