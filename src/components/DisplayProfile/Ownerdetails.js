import { Height } from '@material-ui/icons';
import React,{ Component } from 'react'
import '../../css/formstyle.css'



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
                <div className="div1">
                {
                    this.state.name ? 
                    (<label className="txt1">Name: {this.state.name}</label>)
                    : <label className="txt1">Name: </label>
                }
                </div>
                <div className="div1">
                {
                    this.state.name ? 
                    (<label className="txt1">Email-id: {this.state.email}</label>)
                    : <label className="txt1">Email-id: -- </label>
                } 
                </div>
                <div className="div1">
                {
                    this.state.name ? 
                    (<label className="txt1">Phone: {this.state.phone}</label>)
                    : <label className="txt1">Phone: -- </label>
                }
                </div>
                <div className="adddiv1">
                {
                    this.state.name ? 
                    (<label className="txt1">Address: {this.state.add}</label>)
                    : <label className="txt1">Address: --</label>
                }
                </div>
                <div className="div1">
                {
                    this.state.name ? 
                    (<label className="txt1">State: {this.state.state}</label>)
                    : <label className="txt1">State: --</label>
                }
                </div>
                <div className="div1">
                {
                    this.state.name ? 
                    (<label className="txt1">City: {this.state.city}</label>)
                    : <label className="txt1">City: --</label>
                }
                    
                </div>
            </form>
        )
    };
}
export default displayOwnerProfile