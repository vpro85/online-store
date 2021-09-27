import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', device.selectedType.id)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data=>onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

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
                            <Dropdown.Toggle>{device.selectedType.name || "Select type"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item onClick={() => device.setSelectedType(type)}
                                                   key={type.id}>{type.name}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>{device.selectedBrand.name || "Select brand"}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item onClick={() => device.setSelectedBrand(brand)}
                                                   key={brand.id}>{brand.name}</Dropdown.Item>)}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control placeholder="Input device name..." className="mt-3" value={name}
                                      onChange={e => setName(e.target.value)}/>
                        <Form.Control type={"number"} placeholder="Input quantity..." className="mt-3" value={price}
                                      onChange={e => setPrice(Number(e.target.value))}/>
                        <Form.Control type={"file"} placeholder="Select device image..." className="mt-3"
                                      onChange={selectFile}/>
                        <hr/>
                        {info.map(i =>
                            <Row className="mt-2" key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder={'Input property title...'} value={i.title}
                                                  onChange={e => changeInfo('title', e.target.value, i.number)}/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder={'Input property description...'} value={i.description}
                                                  onChange={e => changeInfo('description', e.target.value, i.number)}/>
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
                    <Button variant={"outline-success"} onClick={addDevice}>Add</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});

export default CreateDevice;