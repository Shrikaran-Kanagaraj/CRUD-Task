import React from "react";
import { Form, Modal, Button } from "react-bootstrap";


function ModalEditPop(props) {
    return (
        <Modal
            //{...props}
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Enter Details</h3>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Edit Name</Form.Label>
                        <Form.Control type="text*" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Edit Username</Form.Label>
                        <Form.Control type="text*" placeholder="Username" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Edit Email</Form.Label>
                        <Form.Control type="email*" placeholder="Email" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalEditPop;