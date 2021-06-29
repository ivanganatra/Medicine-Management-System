import { Height } from '@material-ui/icons';
import React,{ Component } from 'react'
import './display.css'



class displayOwnerProfile extends Component{
    constructor(props) {
                super(props);
                this.state = {
                    name:"Rolit Trivedi",
                    email:"rolit454@gmail.com",
                    phone:"7354037151",
                    add:"Duplex No. 2 Shri Ram Parisar,Shahinaka,Garha",
                    state:"Madhya Pradesh",
                    city:"Jabalpur",
                };
            }
    render(){
        return (
            <form className="Profile">
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label ><span className="displaytxt1">Name:</span> {this.state.name}</label>)
                    : <label ><span className="displaytxt1">Name:</span> -- </label>
                }
                </div>
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Email-id:</span> {this.state.email}</label>)
                    : <label><span className="displaytxt1">Email-id:</span> -- </label>
                } 
                </div>
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Phone #:</span> {this.state.phone}</label>)
                    : <label><span className="displaytxt1">Phone #:</span> -- </label>
                }
                </div>
                <div className="displayadddiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">Address:</span> {this.state.add}</label>)
                    : <label><span className="displaytxt1">Address:</span> --</label>
                }
                </div>
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">State:</span>{this.state.state}</label>)
                    : <label><span className="displaytxt1"></span> --</label>
                }
                </div>
                <div className="displaydiv1">
                {
                    this.state.name ? 
                    (<label><span className="displaytxt1">City:</span> {this.state.city}</label>)
                    : <label><span className="displaytxt1">City:</span> --</label>
                }
                    
                </div>
            </form>
        )
    };
}
export default displayOwnerProfile