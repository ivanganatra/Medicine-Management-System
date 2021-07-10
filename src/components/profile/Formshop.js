import React, { Component } from 'react'
import '../../css/formstyle.css'
import db from '../../firebase';
import UpdateModal from './shopUpdateModal'
import { connect } from 'react-redux';

class Form1 extends Component{
    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.state = {
            name: '',
            address:'',
            phone:'',
            show:false
        }
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
                  name: userData.shop_name || "",
                  address: userData.shop_address || "",
                  phone: userData.shop_phone || ""
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
        db.collection('profiles').doc(this.props.userId).update({
            shop_name: this.state.name,
            shop_phone: this.state.phone,
            shop_address: this.state.address
        }).then(res => {
            this.showModal();
        })
        event.preventDefault()
    }

    render(){
        return (
            <>
            <UpdateModal show={this.state.show} handleClose={this.hideModal} />
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
            </>
        )
    };
}

const mapStateToProps = state => {
    return {
      userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(Form1);