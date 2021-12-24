import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Modal, Container, Row, Button, Table } from 'react-bootstrap';

// import Toaster from "./Toaster";

export default function UserRecordModule(props) {

    const [data, setData] = useState(null);
    // const [deleteID, setDeleteID] = useState(null);
    const [itemDeleted, setItemDeleted] = useState([]);

    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");

    const [modalShow, setModalShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);


    const [addName,setAddName] = useState("");
    const [addUserName,setAddUsername] = useState("");
    const [addEmail,setAddEmail] = useState("");



    const handleChangeForAddName=(e)=>{
        setAddName(e.target.value)
        console.log(e.target.value);
    }

    const handleChangeForAddUsername=(e)=>{
        setAddUsername(e.target.value)
        console.log(e.target.value);
    }

    const handleChangeForAddEmail=(e)=>{
        setAddEmail(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        setAddName("");
        setAddUsername("");
        setAddEmail("");
    }
 


    const AddUser = () => {
        if (name != "" && username != "" && email != "") {
            var newData = data;
            var objData = {
                name: name,
                username: username,
                email: email

            }

            console.log(objData);
            newData.push(objData)
            // console.log("NEW DATAA: ", newData);
            setData(newData);
            setName("");
            setUserName("");
            setEmail("");

        }
        else {
            console.log("error");
            alert("Enter Valid Details")
        }

    }

    const deleteUser = (idx) => {
        if (data.length > 1) {
            let newData = [...data];
            let indexToRemove = newData.findIndex(x => x.id === idx);
            if (indexToRemove > -1) {
                newData.splice(indexToRemove, 1);
                console.log("NEW DATA: ", newData);
                setData(newData);
                setItemDeleted(newData)
            }
        }


    }


    // const deleteUser = (idx) => {
    //     console.log(idx);
    //     if (data) {
    //         setItemDeleted(true);
    //         let newData = data;

    //         newData.splice(idx, 1)
    //         console.log("NEW DATA: ", newData);
    //         setData(newData);
    //         setItemDeleted(false);
    //         setName("");
    //         setUserName("");
    //         setEmail("");

    //     }

    // }

    // useEffect(() => {
    //     if (data) {
    //         let newData = data;

    //         newData.splice(deleteID, 1)
    //         console.log("NEW DATA: ", newData);
    //         setData(newData);
    //         // setDeleteID(null)
    //     }
    // }, [deleteID])





    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>


            <Container className="py-4 my-3">
                <div align="right"  >
                    <Button onClick={() => setModalShow(true)}>Add User</Button>
                </div>
                <Row>
                    {
                        data
                            ?
                            (
                                <div>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>UserName</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((ele, idx) => {
                                                    return (
                                                        <tr key={ele.id}>
                                                            <td>{ele.name}</td>
                                                            <td>{ele.username}</td>
                                                            <td>{ele.email}</td>
                                                            <td>
                                                                <Button className="px-4 mx-3" onClick={() => setModalEditShow(true)}>Edit</Button>

                                                                <Button className="px-3 mx-3" onClick={() => deleteUser(ele.id)} >Delete</Button>
                                                            </td>

                                                        </tr>


                                                    )
                                                })
                                            }
                                            <tr>
                                                <td>
                                                    <input type="text" placeholder="Name" required="required" onChange={e => setName(e.target.value)} value={name} />
                                                </td>
                                                <td>
                                                    <input type="text" placeholder="UserName" required="required" onChange={e => setUserName(e.target.value)} value={username} />
                                                </td>
                                                <td>
                                                    <input type="email" placeholder="Email" required="required" onChange={e => setEmail(e.target.value)} value={email} />
                                                </td>
                                                <td>
                                                    <Button onClick={AddUser} >Add User</Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            )
                            :
                            (<></>)
                    }
                </Row>
            </Container>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label>Enter Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" value={addName} onChange={handleChangeForAddName} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Enter Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={addUserName} onChange={handleChangeForAddUsername}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={addEmail} onChange={handleChangeForAddEmail}/>
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button >Submit</Button>
                </Modal.Footer>
            </Modal>



            <Modal
                show={modalEditShow}
                onHide={() => setModalEditShow(false)}
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
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Edit Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Edit Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Submit</Button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}