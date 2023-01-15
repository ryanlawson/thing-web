import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteAThing = () => {
    const [showDialog, setShowDialog] = useState(false)
    const toggleDialog = () => setShowDialog(!showDialog)

    return (
        <>
            <p><Button variant='danger' onClick={toggleDialog}>Delete a Thing</Button></p>
            <Modal show={showDialog} onHide={toggleDialog}>
                <Modal.Header closeButton>
                <Modal.Title>Delete a Thing</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={toggleDialog}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteAThing;
