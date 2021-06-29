import React,{ Component } from 'react'
import './display.css'

class displayShopProfile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"Raj Medical",
            phone:"0761-4001628",
            add:"Duplex No. 2 Shri Ram Parisar,Shahinaka,Garha",
        };
    }
    render(){
        return (
            <form className="Profile">
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Shop Name:</span> {this.state.name}</label>)
                    : <label><span className="displaytxt1">Shop Name:</span> </label>
                }
                </div>
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Shop Phone #:</span> {this.state.phone}</label>)
                    : <label><span className="displaytxt1">Shop Phone #:</span> -- </label>
                }
                </div>
                <div className="displayadddiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Shop Address:</span> {this.state.add}</label>)
                    : <label><span className="displaytxt1">Shop Address:</span> --</label>
                }
                </div>
            </form>
        )
    };
}
export default displayShopProfile