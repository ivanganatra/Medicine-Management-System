import React,{ Component } from 'react'
import '../../css/formstyle.css'

const name="Rolit Trivedi";
const email="rolit454@gmail.com";
const phone="7354037151";
const add="Duplex No. 2 Shri Ram Parisar,Shahinaka,Garha";
const state="Madhya Pradesh";
const city="Jabalpur";

class displayCustProfile extends Component{
    render(){
        return (
            <form className="Profile">
                <div>
                    <label className="txt1">Name: {name}</label>
                </div>
                <div>
                    <label className="txt1">Email-id: {email}</label>
                </div>
                <div>
                    <label className="txt1" >Phone: {phone}</label>
                </div>
                <div>
                    <label className="txt1">Address: {add}</label>
                </div>
                <div>
                    <label className="txt1">State: {state}</label>
                </div>
                <div>
                    <label className="txt1">City: {city}</label>
                </div>
            </form>
        )
    };
}
export default displayCustProfile