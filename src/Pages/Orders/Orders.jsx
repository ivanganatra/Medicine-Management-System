import React, { Component } from 'react';
import "./Orders.css";
import OrderImg from "../../assets/images/Orders/list1.jpeg";
class Orders extends Component {
  state = {
    orders: [
      {
        id : "1001",
        status: "Collected",
        time : "12:00",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo!",
      },
      {
        id: "1002",
        status: "Awaiting Collection",
        time: "06:00",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, natus autem!",
      },
      {
        id: "1003",
        status: "Confirmed",
        time: "08:00",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum.",
      },
      {
        id: "1004",
        status: "Pending",
        time: "15:00",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Necessitatibus commodi nihil qui officia.",
      },
    ]
  }
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
                    {
                      this.state.orders.map((order, index) => {
                        return (
                          <tr key={index}>
                            <td className="ps-md-3">{order.id}</td>
                            <td className="ps-md-3">{order.status}</td>
                            <td className="ps-md-3">{order.time}</td>
                            <td className="ps-md-3">{order.desc}</td>
                          </tr>
                        );
                      })
                    }
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