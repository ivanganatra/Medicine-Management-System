import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import db from '../../firebase';
import "./Orders.css";
import OrderImg from "../../assets/images/Orders/list11.jpeg";
class Orders extends Component {
  state = {
    orders: []
  }

  componentDidMount() {
    db.collection("orders").orderBy('created_at', "desc").get().then(snapshot => {
      let userOrders = [];
      if (this.props.category === 'customer') {
        snapshot.docs.forEach(doc => {
          if (doc.data().created_by === this.props.userId) {
            userOrders.push({
              ...doc.data(),
              id: doc.id
            });
          }
        })
      } else {
        snapshot.docs.forEach(doc => {
          if (doc.data().accepted_by === this.props.userId) {
            userOrders.push({
              ...doc.data(),
              id: doc.id
            });
          }
        })
      }
      console.log(userOrders);
      this.setState({ orders: userOrders });
    })

    db.collection('orders').doc('UnCAZ5RGmjgaClNDFWfc') // dummy Order for accepted Orders
    .get().then(doc => {
      console.log("accepted Orders", doc.data());
      console.log(doc.id);
    })

    db.collection('orders').doc('Zt96Fh75qr1fPxIA4ovG') // dummy Order from pending Orders
    .get().then(doc => {
      console.log("pending orders", doc.data());
      console.log(doc.id);
    })
  }

  render() {
    console.log(this.state.orders);
    return (
      <div className="main-container" style={{ paddingTop: "95px" }}>
        <div className="container">
          <div className="row p-3 d-flex align-items-center">
            <div className="col-12 col-md-8 px-0">
              <div className="col-12">
                <h1 className="main-heading">Your Orders</h1>
                <hr />
              </div>
              <div className="col-12 pt-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-md-3"><span>OrderId</span> </th>
                      <th scope="col" className="ps-md-3"><span>Posted At</span></th>
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
    userId: state.auth.userId,
    category: state.auth.category
  }
}

export default connect(mapStateToProps)(withRouter(Orders));