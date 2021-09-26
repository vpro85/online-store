import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../components/http/userAPI";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{"height": window.innerHeight - 78}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Input your email..." value={email}
                                  onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Control className="mt-3" type={"password"} placeholder="Input your password..."
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}/>
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
                        <Button variant={"outline-success"}
                                className={"align-self-end mt-3"}
                                onClick={click}>{isLogin ? 'Sign in' : 'Sign up'}</Button>

                    </Row>
                </Form>

            </Card>
        </Container>
    );
});

export default Auth;