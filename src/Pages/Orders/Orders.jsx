import React, { Component } from 'react';
import "./Orders.css";
class Orders extends Component {
  state = {}
  render() {
    return (
      <div className="" style={{ paddingTop: "95px" }}>
        <div className="container">
          <div className="row p-3 pt-5">
            <div className="col-12">
              <h1 className="main-heading">Your Orders</h1>
            <hr />
            </div>
          {/* </div>
          <div className="row p-3 pt-5"> */}
            <div className="col-12 pt-4">
              <table className="table table-borderless">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Status</th>
                    <th scope="col">Booking Time</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orders;