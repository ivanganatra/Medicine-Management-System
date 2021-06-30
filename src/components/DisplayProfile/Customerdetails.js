import React, { Component } from "react";
import "./display.css";

import { connect } from 'react-redux';
import db from '../../firebase';

class displayCustProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null,
      add: null,
      state: null,
      city: null,
    };
  }

  componentDidMount() {
      db.collection('profiles').doc(this.props.userId).get().then(doc => {
          if(doc.exists) {
            const userData = doc.data();

            this.setState({
                name: userData.name,
                address: userData.address,
                city: userData.city,
                add: userData.address,
                state: userData.state,
                email: userData.email,
                phone: userData.phone
            })
          }
      })
  }

  render() {
    return (
      <form className="Profile">
        <div className="displaydiv1">
          {this.state.name ? (
            <label>
              <span className="displaytxt1">Name:</span> {this.state.name}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">Name:</span> --{" "}
            </label>
          )}
        </div>
        <div className="displaydiv1">
          {this.state.email ? (
            <label>
              <span className="displaytxt1">Email-id:</span> {this.state.email}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">Email-id:</span> --{" "}
            </label>
          )}
        </div>
        <div className="displaydiv1">
          {this.state.phone ? (
            <label>
              <span className="displaytxt1">Phone:</span> {this.state.phone}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">Phone: </span> --{" "}
            </label>
          )}
        </div>
        <div className="displayadddiv1">
          {this.state.add ? (
            <label>
              <span className="displaytxt1">Address:</span> {this.state.add}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">Address:</span> --
            </label>
          )}
        </div>
        <div className="displaydiv1">
          {this.state.state ? (
            <label>
              <span className="displaytxt1">State: </span> {this.state.state}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">State:</span> --
            </label>
          )}
        </div>
        <div className="displaydiv1">
          {this.state.city ? (
            <label>
              <span className="displaytxt1">City:</span> {this.state.city}
            </label>
          ) : (
            <label>
              <span className="displaytxt1">City:</span> --
            </label>
          )}
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(displayCustProfile);
