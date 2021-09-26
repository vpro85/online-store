import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new device
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Select type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type => <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Select brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand => <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control placeholder="Input device name..." className="mt-3"/>
                        <Form.Control type={"number"} placeholder="Input quantity..." className="mt-3"/>
                        <Form.Control type={"file"} placeholder="Select device image..." className="mt-3"/>
                        <hr/>
                        {info.map(i =>
                            <Row className="mt-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder={'Input property title...'} />
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder={'Input property description...'} />
                                </Col>
                                <Col md={4}>
                                    <Button variant={"outline-danger"}
                                            onClick={() => removeInfo(i.number)}>Delete</Button>
                                </Col>
                            </Row>
                        )}
                        <Button className="mt-2" variant={"outline-dark"} onClick={addInfo}>Add new property</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                    <Button variant={"outline-success"} onClick={onHide}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;