import React from "react";
import { Form, Modal, Button } from "react-bootstrap";


function ModalPop(props) {
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
                    Add User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Enter Details</h3>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Name</Form.Label>
                        <Form.Control type="text*" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Username</Form.Label>
                        <Form.Control type="text*" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Enter Email</Form.Label>
                        <Form.Control type="email*" placeholder="Enter Email" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalPop;