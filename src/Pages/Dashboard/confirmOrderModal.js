import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const confirmModal = ({show, handleClose, confirmOrder}) => {
    return (
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
    )
}

export default confirmModal;