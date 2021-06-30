import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { connect, useSelector } from 'react-redux';
import { selectUserData } from '../../reduxSlices/authSlice';
import db from '../../firebase';

import OrderConfirmedModal from './orderConfirmedModal';
import ConfirmModal from './confirmOrderModal';
import CompleteProfileModal from './completeProfileModal';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

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

const Dashboard = (props) => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const userData = useSelector(selectUserData);
    const [showOrderConfirmModal, setShowOrderConfirmModal] = useState(false);
    const [showCompleteProfile, setShowCompleteProfile] = useState(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        let fetchOrders = [];
        setLoading(true);
        db.collection("orders").orderBy('created_at', 'desc').get().then(async snapshot => {
            let pendingOrders = [];
            snapshot.docs.forEach(doc => {
                if(doc.data().status === "pending") {
                    pendingOrders.push(doc);
                }
            })
            fetchOrders = pendingOrders.map(async doc => {
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
                        seed: doc2.data().seed,
                        id: doc.id,
                        timestamp: doc.data().created_at
                    } 
                })
                return orderDetail;
            })

            await Promise.all(fetchOrders).then(responseOrders => {
                setOrders(responseOrders);
            })
            setLoading(false);
        })
    }, [])

    const confirmOrder = () => {
        setLoading(true);
        db.collection("orders").doc(selectedOrder).update({
            status: "confirmed",
            accepted_by: userData.userId
        }).then(res => {
            console.log(res);
            setLoading(false);
            setShowOrderConfirmModal(true);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
        handleClose();
    }

    const selectOrder = (orderId) => {
        db.collection('profiles').doc(props.userId).get().then(doc => {
            if(!doc.exists) {
                setShowCompleteProfile(true);
                alert("Please Complete your profile first.")
                return;
            } else if(!doc.data().shop_name) {
                setShowCompleteProfile(true);
                return;
            } else {
                setSelectedOrder(orderId);
                setShow(true);
            }
        })
    }

    return (
        <>
            <ConfirmModal 
                show={show}
                handleClose={handleClose}
                confirmOrder={confirmOrder}
            />

            <OrderConfirmedModal 
                show={showOrderConfirmModal}
                handleClose={window.location.reload}
                selectedOrderId={selectedOrder}
            />

            <CompleteProfileModal 
                show={showCompleteProfile}
                handleClose={() => setShowCompleteProfile(false)}
            />
    
            <div className="Dashboard_Container">
                <div className="container Dashboard ">
                    <h1 className="text-center pt-3">Medical Needs</h1>
                    <div className="Dashboard_Orders my-5">
                        {
                            loading ? (
                                <div className="text-center mt-5">
                                    <CircularProgress size={40} /> 
                                </div>
                            ) : orders.length > 0 ? 
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
                                            {
                                                order.description !== "" ? (
                                                    <>
                                                        <h4 className="mt-3">Description: </h4>
                                                        <p>
                                                            {order.description}
                                                        </p>
                                                    </>
                                                ) : null
                                            }
                                            
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
                            }) : <h4 className="text-center">There are no active orders at the moment</h4>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps)(Dashboard);