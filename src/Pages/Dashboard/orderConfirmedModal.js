import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const OrderConfirmedModal = ({show, handleClose, selectedOrderId}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>Confirm Order</Modal.Title>
            <IconButton onClick={handleClose}><ClearIcon /></IconButton>
            </Modal.Header>
            <Modal.Body>
                <p>Your Order with order_id: <strong>{selectedOrderId}</strong> has been confirmed. We have send your profile details to the customer. You can contact with the customer using the details provided at Orders Section.</p>
            </Modal.Body>
            <Modal.Footer>
            <a href="/orders">
                <Button color="primary">
                    My Orders
                </Button>
            </a>
            </Modal.Footer>
        </Modal>
    )
}

export default OrderConfirmedModal;