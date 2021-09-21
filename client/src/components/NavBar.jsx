import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{'color': 'white', 'textDecoration': 'none'}} to={SHOP_ROUTE}>buyDevice</NavLink>
                    <Nav className="ml-auto" style={{'color': 'white'}}>
                        {user.isAuth ? <>
                                <Button variant={"outline-light"}>Admin Panel</Button>
                                <Button variant={"outline-light"} className="ms-2" onClick={() => user.setIsAuth(false)}>Log out</Button>
                            </>
                            :
                            <>
                                <Button variant={"outline-light"}
                                        onClick={() => user.setIsAuth(true)}>Authorization</Button>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <br/>
        </>
    );
});

export default NavBar;