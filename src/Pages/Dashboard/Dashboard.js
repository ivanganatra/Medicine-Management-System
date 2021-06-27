import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';
import db from '../../firebase';

import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const getRandomAvatar = (seed) => {
    return "https://avatars.dicebear.com/api/identicon/" + seed  + ".svg?background=%23eee";
}

const getDate = (sec) => {
    const newDate = new Date(sec * 1000);
    let day = newDate.getDate().toString();
    if(day.length === 1) day = "0" + day;
    let month = (newDate.getMonth() + 1).toString();
    if(month.length === 1) month = "0" + month;
    let year = newDate.getFullYear();
    return day + "-" + month + "-" + year;
}

const getTime = (sec) => {
    const newDate = new Date(sec * 1000);
    let hours = newDate.getHours().toString();
    if(hours.length === 1) hours = "0" + hours;
    let minutes = newDate.getMinutes().toString();
    if(minutes.length === 1) minutes = "0" + minutes;
    let seconds = newDate.getSeconds().toString();
    if(seconds.length === 1) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const userData = useSelector(selectUserData);

    const handleClose = () => setShow(false);

    useEffect(() => {
        let fetchOrders = [];
        setLoading(true);
        db.collection("orders").where("status", "==", "pending").get().then(snapshot => {
            fetchOrders = snapshot.docs.map(async doc => {
                let orderDetail = {};
                await db.collection("profiles").doc(doc.data().created_by).get().then(doc2 => {
                    orderDetail = {
                        name: doc2.data().name,
                        address: doc2.data().address,
                        city: doc2.data().city,
                        state: doc2.data().state,
                        imgUrl: doc.data().img_url,
                        description: doc.data().description,
                        contact: doc2.data().phone,
                        seed: doc.data().seed,
                        id: doc.id,
                        timestamp: doc.data().created_at
                    } 
                })
                return orderDetail;
            })

            Promise.all(fetchOrders).then(responseOrders => {
                setLoading(false);
                setOrders(responseOrders);
            })
        })
    }, [])

    const confirmOrder = () => {
        db.collection("orders").doc(selectedOrder).update({
            status: "confirmed",
            accepted_by: userData.userId
        })
        handleClose();
    }

    const selectOrder = (orderId) => {
        setSelectedOrder(orderId);
        setShow(true);
        console.log(orderId);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Confirm Order</Modal.Title>
                <IconButton onClick={handleClose}><ClearIcon /></IconButton>
                </Modal.Header>
                <Modal.Body>
                    <p>Before confirming this order make sure that you have the stock available in your shop.<br/> A confirmation mail will be sent to the customer.</p>
                    <p className="text-danger Dashboard_Warning"><span className="font-weight-bold">Note:</span> Failing to supply the order may lead to suspension of your account.</p>
                </Modal.Body>
                <Modal.Footer>
                <Button onClick={handleClose}>
                    Close
                </Button>
                <Button color="primary" onClick={confirmOrder}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="Dashboard_Container">
                <div className="container Dashboard ">
                    <h1 className="text-center pt-3">Medical Needs</h1>
                    <div className="Dashboard_Orders my-5">
                        {
                            loading ? (
                                <div className="text-center mt-5">
                                    <CircularProgress size={40} /> 
                                </div>
                            ) : 
                            orders.map(order => {
                                return (
                                    <div key={order.id} className="Dashboard_Order my-5">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Avatar src={getRandomAvatar(order.seed)} ></Avatar>
                                            </div>
                                            <div className="Dashboard_OrderTitle flex-grow-1">
                                                <h3>{order.name}</h3>
                                                <div className="Dashboard_PostTime_SmallScreen">
                                                Posted at <span>{getTime(order.timestamp.seconds)}</span> on <span>{getDate(order.timestamp.seconds)} </span>
                                                </div>
                                            </div>
                                            <div className="Dashboard_PostTime">
                                                Posted at {getTime(order.timestamp.seconds)} on {getDate(order.timestamp.seconds)}
                                            </div>
                                        </div>
                                        
                                        <div className="Dashboard_OrderBody">
                                            <div className="mt-4">
                                                <span className="Field">Contact</span>: {order.contact}<br/>
                                                <span className="Field">Address</span>: {order.address}<br/>
                                                <span className="Field">City</span>: {order.city}<br/>
                                                <span className="Field">State</span>: {order.state}<br/>
                                            </div>
                                            <h4 className="mt-3">Description: </h4>
                                            <p>
                                                {order.description}
                                            </p>
                                            <h4 className="mt-3">Prescription: </h4>
                                            <div className="Dashboard_Prescription">
                                                <a href={order.imgUrl} target="_blank">
                                                <img src={order.imgUrl} />
                                                </a>
                                            </div>
                                            <Button onClick={() => selectOrder(order.id)} className="mt-3" variant="contained" color="primary">
                                                Confirm this Order
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;