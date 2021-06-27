import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import db from '../../firebase';
import "./Orders.css";
import OrderImg from "../../assets/images/Orders/list11.jpeg";
class Orders extends Component {
  state = {
    orders: [
      // {
      //   accepted_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   created_at: "June 20, 2021 5:08:34 PM UTC+5:30",
      //   created_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   description: "I am in urgent need of these medicines. No nearby shops have these in stock. Please help !",
      //   img_url: "https://firebasestorage.googleapis.com/v0/b/frosthack-a595f.appspot.com/o/images%2Fprescription2.jpg?alt=media&token=e74e5cde-7ef0-40ab-9d79-10ebe21b08dc",
      //   status: "collected",
      //   id: "01001",
      //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo!",
      // },
      // {
      //   accepted_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   created_at: "June 22, 2021 8:55:38 PM UTC+5:30",
      //   created_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   description: "I am in urgent need of these medicines. No nearby shops have these in stock. Please help !",
      //   img_url: "https://firebasestorage.googleapis.com/v0/b/frosthack-a595f.appspot.com/o/images%2Fprescription2.jpg?alt=media&token=e74e5cde-7ef0-40ab-9d79-10ebe21b08dc",
      //   id: "01002",
      //   status: "confirmed",
      // },
      // {
      //   accepted_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   created_at: "June 26, 2021 7:06:04 PM UTC+5:30",
      //   created_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   description: "I am in urgent need of these medicines. No nearby shops have these in stock. Please help !",
      //   img_url: "https://firebasestorage.googleapis.com/v0/b/frosthack-a595f.appspot.com/o/images%2Fprescription2.jpg?alt=media&token=e74e5cde-7ef0-40ab-9d79-10ebe21b08dc",
      //   id: "01003",
      //   status: "pending",
      // },
      // {
      //   accepted_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   created_at: "June 29, 2021 10:48:59 PM UTC+5:30",
      //   created_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   description: "I am in urgent need of these medicines. No nearby shops have these in stock. Please help !",
      //   img_url: "https://firebasestorage.googleapis.com/v0/b/frosthack-a595f.appspot.com/o/images%2Fprescription2.jpg?alt=media&token=e74e5cde-7ef0-40ab-9d79-10ebe21b08dc",
      //   id: "01004",
      //   status: "confirmed",
      // }, 
      // {
      //   accepted_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   created_at: "June 24, 2021 11:00:01 PM UTC+5:30",
      //   created_by: "Jjaxv2ISvdeN5lqaqTNqJvWxdcp1",
      //   description: "I am in urgent need of these medicines. No nearby shops have these in stock. Please help !",
      //   img_url: "https://firebasestorage.googleapis.com/v0/b/frosthack-a595f.appspot.com/o/images%2Fprescription2.jpg?alt=media&token=e74e5cde-7ef0-40ab-9d79-10ebe21b08dc",
      //   id: "01005",
      //   status: "cancelled",
      // },
    ]
  }

  componentDidMount() {
    db.collection("orders").orderBy('created_at', "desc").get().then(snapshot => {
      let userOrders = [];
      snapshot.docs.forEach(doc => {
        if (doc.data().created_by === this.props.userId) {
          userOrders.push({
            ...doc.data(),
            id: doc.id
          });
        }
      })
      console.log(userOrders);
      this.setState({ orders: userOrders });
    })
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
              {/* </div>
          <div className="row p-3 pt-5"> */}
              <div className="col-12 pt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-md-3"><span>OrderId</span> </th>
                      {/* <th scope="col" className="ps-md-3"><span>Date</span></th> */}
                      <th scope="col" className="ps-md-3"><span>Time of Booking</span></th>
                      <th scope="col" className="ps-md-3"><span>Status</span></th>
                      <th scope="col" className="ps-md-3"><span>Action</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.orders.map((order, index) => {
                        let statusClass = "";
                        if (order.status === "collected") {
                          statusClass = "bg-success";
                        } else if (order.status === "confirmed") {
                          statusClass = "bg-primary";
                        } else if (order.status === "pending") {
                          statusClass = "bg-warning";
                        } else if (order.status === "cancelled") {
                          statusClass = "bg-danger";
                        }
                        // let statusClass = "ps-md-3 text-capitalize fw-bold";
                        // if (order.status === "collected") {
                        //   statusClass = "ps-md-3 text-capitalize fw-bold text-success";
                        // } else if (order.status === "confirmed") {
                        //   statusClass = "ps-md-3 text-capitalize fw-bold text-primary";
                        // }else if (order.status === "pending") {
                        //   statusClass = "ps-md-3 text-capitalize fw-bold text-warning";
                        // } else if (order.status === "cancelled") {
                        //   statusClass = "ps-md-3 text-capitalize fw-bold text-danger";
                        // }
                        return (
                          <>
                            <tr key={index}>
                              <th className="ps-md-3">{order.id}</th>
                              <td className="ps-md-3">{new Date(order.created_at.seconds * 1000).toLocaleString([], { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>{/* <td className="ps-md-3">{new Date(order.created_at).toLocaleTimeString()}</td> */}
                              <td className="ps-md-3">
                                <span className={"badge text-capitalize " + statusClass}>
                                  {order.status}
                                </span>
                              </td>
                              <td className="ps-md-3">
                                <RouterLink to={this.props.location.pathname + "/" + order.id}>View Order</RouterLink>
                              </td>
                            </tr>
                          </>

                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
            <div className="offset-md-1 col-md-3 d-none d-md-block">
              <img src={OrderImg} alt="Not Found" width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  }
}

export default connect(mapStateToProps)(withRouter(Orders));