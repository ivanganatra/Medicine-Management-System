import React,{ Component } from 'react'
import '../../css/formstyle.css'

const name="Raj Medical";
const phone="0761-4001628";
const add="Duplex No. 2 Shri Ram Parisar,Shahinaka,Garha";

class displayShopProfile extends Component{
    render(){
        return (
            <form className="Profile">
                <div>
                    <label className="txt1">Name: {name}</label>
                </div>
                <div>
                    <label className="txt1" >Phone: {phone}</label>
                </div>
                <div>
                    <label className="txt1">Address: {add}</label>
                </div>
            </form>
        )
    };
}
export default displayShopProfile