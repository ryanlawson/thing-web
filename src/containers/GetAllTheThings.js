import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GetAllTheThings = () => {
    const [showDialog, setShowDialog] = useState(false)
    const toggleDialog = () => setShowDialog(!showDialog)

    return (
        <>
            <p><Button variant='primary' onClick={toggleDialog}>Get all the Things</Button></p>
            <Modal show={showDialog} onHide={toggleDialog}>
                <Modal.Header closeButton>
                <Modal.Title>Get all the Things</Modal.Title>
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

export default GetAllTheThings;
