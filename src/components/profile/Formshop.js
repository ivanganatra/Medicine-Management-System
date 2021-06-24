import React, { Component } from 'react'
import '../../css/formstyle.css'

class Form1 extends Component{4
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address:'',
            phone:'',
        }
    }
    handleNameChange = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handleAddressChange = event => {
        this.setState({
            address:event.target.value
        })
    }
    handlePhoneChange = event => {
        this.setState({
            phone:event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.name} ${this.state.phone} ${this.state.address}`);
        event.preventDefault()
    }

    render(){
        return (
            <form className="Profile" onSubmit={this.handleSubmit}>
                <div>
                    <label className="txt">Name:</label>
                    <input type="text" className="addinput" required value={this.state.name} onChange={this.handleNameChange}/>
                </div>
                <div>
                    <label className="txt" >Phone:</label>
                    <input type="tel" className="addinput" required value={this.state.phone} onChange={this.handlePhoneChange}></input>
                </div>
                <div>
                    <label className="txt">Address:</label>
                    <textarea className="addinput1" required value={this.state.address} onChange={this.handleAddressChange}></textarea>
                </div>
                <button className="formbutton" type="submit">Submit</button>
            </form>
        )
    };
}

export default Form1
