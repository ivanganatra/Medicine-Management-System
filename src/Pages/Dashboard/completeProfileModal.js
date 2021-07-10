import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const CompleteProfileModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>Profile Incomplete</Modal.Title>
            <IconButton onClick={handleClose}><ClearIcon /></IconButton>
            </Modal.Header>
            <Modal.Body>
                <p>Please Complete your Profile first before confirming any order. After completing your profile try confirming the order again.</p>
            </Modal.Body>
            <Modal.Footer>
            <a href="/profileUpdate">
                <Button color="primary">
                    Update Profile
                </Button>
            </a>
            </Modal.Footer>
        </Modal>
    )
}

export default CompleteProfileModal;