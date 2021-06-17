import React, { Component } from 'react'
import '../../css/formstyle.css'

class Form extends Component{4
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            email: '',
            address:'',
            state:'',
            city:'',
            phone:'',
        }
    }
    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleEmailChange = event => {
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
        this.setState({
            phone:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.email} ${this.state.phone} ${this.state.address} ${this.state.state} ${this.state.city}`);
        event.preventDefault()
    }
    
    render(){
        return (
            <form className="Profile" onSubmit={this.handleSubmit}>
                <div>
                    <label className="txt">Name:</label>
                    <input type="text" className="input" required value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label className="txt">Email-id:</label>
                    <input type="text" className="input" required value={this.state.email} onChange={this.handleEmailChange}/>
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
        )
    };
}

export default Form
