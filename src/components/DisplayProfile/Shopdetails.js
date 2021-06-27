import React,{ Component } from 'react'
import '../../css/formstyle.css'

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
            </form>
        )
    };
}
export default displayShopProfile