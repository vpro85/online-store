import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../http/deviceAPI";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => setValue(''))
        onHide()
    }

    return (
        <div>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                // aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new type
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control placeholder="Input type name..." value={value}
                                      onChange={(e) => setValue(e.target.value)}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-danger"} onClick={onHide}>Close</Button>
                    <Button variant={"outline-success"} onClick={addType}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateType;