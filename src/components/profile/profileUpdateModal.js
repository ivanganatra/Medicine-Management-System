import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-bootstrap/Modal';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

const updateModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
            <Modal.Title>Profile Updated</Modal.Title>
            <IconButton onClick={handleClose}><ClearIcon /></IconButton>
            </Modal.Header>
            <Modal.Body>
                <p>Profile details has been Updated.
                    <br/> Please Check your updated profile.
                </p>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default updateModal;