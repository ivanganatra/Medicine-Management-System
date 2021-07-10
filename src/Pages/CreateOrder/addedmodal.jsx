import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const OrderAddedModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Profile Incomplete</Modal.Title>
        <IconButton onClick={handleClose}><ClearIcon /></IconButton>
      </Modal.Header>
      <Modal.Body>
        <p>Order Added Successfully !!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default OrderAddedModal;