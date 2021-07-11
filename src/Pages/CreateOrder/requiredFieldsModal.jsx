import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const RequiredFieldsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Order Incomplete</Modal.Title>
        <IconButton onClick={handleClose}><ClearIcon /></IconButton>
      </Modal.Header>
      <Modal.Body>
        <p>The prescription and the decription fields compulsary, add them and try again later!!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RequiredFieldsModal;