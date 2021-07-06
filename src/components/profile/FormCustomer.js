import React, { Component, useState, useEffect } from 'react'
import '../../css/formstyle.css'
import UpdateModal from './profileUpdateModal'
import db from '../../firebase';
import { connect } from 'react-redux';

function validateEmail(email) {
    console.log(email);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Form extends Component{
    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.state = {
            name: '',
            email: '',
            address:'',
            state:'',
            city:'',
            phone:'',
            show: false,
            emailErr: false
        };
    }
    showModal = () => {
        this.setState({ 
            show: true 
        });
    };
    
    hideModal = () => {
        this.setState({ 
            show: false 
        });
    };

    componentDidMount() {
        db.collection('profiles').doc(this.props.userId).get().then(doc => {
            if(doc.exists) {
                const userData = doc.data();
                this.setState({
                    name: userData.name || "",
                    email: userData.email || "",
                    address: userData.address || "",
                    state: userData.state || "",
                    city: userData.city || "",
                    phone: userData.phone || ""
                })
            } else {
                db.collection('profiles').doc(this.props.userId).set({
                    seed: Math.floor(Math.random() * 1000)
                });
            }
        })
    }
    

    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email:event.target.value
        })

    }
    handleAddressChange = event => {
        this.setState({
            address:event.target.value
        })
    }
    handleStateChange = (event)=>{
        this.setState({
            state:event.target.value
        })
    }
    handleCityChange = event => {
        this.setState({
            city:event.target.value
        })
    }
    handlePhoneChange = event => {
        if(isNaN(event.target.value)) {
            return;
        }
        this.setState({
            phone:event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!validateEmail(this.state.email)) {
            this.setState({
                emailErr: true
            })
            return;
        } else {
            this.setState({
                emailErr: false
            })
        }
        db.collection('profiles').doc(this.props.userId).update({
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            state: this.state.state,
            city: this.state.city,
            phone: this.state.phone
        }).then(res => {
            this.showModal();
        })
    }

    render(){
        return (
            <>
            <UpdateModal show={this.state.show} handleClose={this.hideModal} />
            <form className="Profile" onSubmit={this.handleSubmit}>
                <div>
                    <label className="txt">Name:</label>
                    <input type="text" className="input" required value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label className="txt">Email-id:</label>
                    <input type="email" className="input" required value={this.state.email} onChange={this.handleEmailChange}/>
                    {
                        this.state.emailErr ? <span className="Danger_Text">Enter a valid Email ID</span> : null
                    }
                    
                </div>
                <div>
                    <label className="txt" >Phone:</label>
                    <input type="tel" className="input" required value={this.state.phone} onChange={this.handlePhoneChange}></input>
                </div>
                <div>
                    <label className="txt">Address:</label>
                    <textarea className="input1" required value={this.state.address} onChange={this.handleAddressChange}></textarea>
                </div>
                <div>
                    <label className="txt">State:</label>
                    <input type="text" className="input" required value={this.state.state} onChange={this.handleStateChange}/>
                </div>
                <div>
                    <label className="txt">City</label>
                    <input type="text" className="input" required value={this.state.city} onChange={this.handleCityChange}/>
                </div>
                <button className="formbutton" type="submit">Submit</button>
            </form>
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(Form);