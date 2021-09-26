import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";
import {fetchBrands} from "./http/deviceAPI";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">

            {device.brands.map(brand =>
                <Col key={brand.id}>
                    <Card
                        style={{cursor: 'pointer'}}
                        className="p-3 align-items-center"
                        border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                        onClick={() => {
                            device.setSelectedBrand(brand)
                        }}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;