import React from 'react';
import {Context} from "../index";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    // console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{"height": window.innerHeight - 78}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input your email..."/>
                    <Form.Control className="mt-3" placeholder="Input your password..."/>
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                        {isLogin ?
                            <div>
                                Not registered yet? <NavLink to={REGISTRATION_ROUTE}>Sign up here!</NavLink>
                            </div>
                            :
                            <div>
                                Do you have an account? <NavLink to={LOGIN_ROUTE}>Sign in here!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} className={"align-self-end mt-3"}>{isLogin ? 'Sign in' : 'Sign up'}</Button>

                    </Row>
                </Form>

            </Card>
        </Container>
    );
};

export default Auth;