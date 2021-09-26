import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import star from '../assets/big_star.png'

const DevicePage = () => {
    const device = {
        "id": 1,
        "name": "Galaxy S21 5G 256 ГБ",
        "price": 73990,
        "rating": 0,
        "img": "b1c8dc53-b3cd-4ddf-b478-479132b76060.jpg",
        "createdAt": "2021-09-20T19:20:35.841Z",
        "updatedAt": "2021-09-20T19:20:35.841Z",
        "typeId": 2,
        "brandId": 1
    }
    const description = [
        {id: 1, title: 'Оперативная память', description: '5 ГБ'},
        {id: 2, title: 'Камера', description: '12 Мп'},
        {id: 3, title: 'Процессор', description: 'Exynos 2100'},
        {id: 4, title: 'Кол-во ядер', description: ' 8'},
        {id: 5, title: 'Аккумулятор', description: '4000 мАч'},
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={'http://192.168.1.13:5000/' + device.img} alt={device.name}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div className="d-flex align-items-center justify-content-center"
                             style={{
                                 background: `url(${star}) no-repeat center center`,
                                 width: 240,
                                 height: 240,
                                 backgroundSize: 'cover',
                                 fontSize: 64
                             }}>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around"
                          style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}>
                        <h3>{device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Add to Cart</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column mt-3">
                <h1>Product specifications: </h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;