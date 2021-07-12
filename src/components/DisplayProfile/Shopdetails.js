import React,{ Component } from 'react'
import './display.css'

import db from '../../firebase';
import { connect } from 'react-redux';

class displayShopProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            phone: null,
            add: null,
        };
    }

    componentDidMount() {
        db.collection('profiles').doc(this.props.userId).get().then(doc => {
            if(doc.exists) {
                const userData = doc.data();
                this.setState({
                    name: userData.shop_name,
                    phone: userData.shop_phone,
                    add: userData.shop_address,
                })
            }
        })
    }

    render(){
        console.log(this.state);
        return (
            <form className="Profile">
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Shop Name:</span> {this.state.name}</label>)
                    : <label><span className="displaytxt1">Shop Name:</span> -- </label>
                }
                </div>
                <div className="displaydiv1">
                {
                    this.state.phone ? 
                    (<label><span className="displaytxt1">Shop Phone:</span> {this.state.phone}</label>)
                    : <label><span className="displaytxt1">Shop Phone:</span> -- </label>
                }
                </div>
                <div className="displayadddiv1">
                {
                    this.state.add ? 
                    (<label><span className="displaytxt1">Shop Address:</span> {this.state.add}</label>)
                    : <label><span className="displaytxt1">Shop Address:</span> --</label>
                }
                </div>
            </form>
        )
    };
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(displayShopProfile);