import React, {useState} from 'react';
import {Col, Container, Form, Row, Button, Spinner, Alert} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {regUserAction} from "../../redux/actions";

function UserRegisterPage() {
    const dispatch = useDispatch()

    const {preloader} = useSelector(state =>  state.preloader)

    const {massage, variant} = useSelector(state => state.alertReducer())
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })

    const formsValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const regUser = (event) => {
        event.preventDefault()
        dispatch(regUserAction(user))
        console.log(user)
    }

    return (
        <Container>
            <h1 className="my-5">User register</h1>
            {
                preloader
                    ?
                    <Spinner animation="grow"/>
                    :
                    <>
                        <Form onSubmit={regUser}>
                            <Row>
                                <Col lg={3}>
                                    <Form.Group className="mb-3" controlId="name">
                                        {/*<Form.Label>name</Form.Label>*/}
                                        <Form.Control type="text" placeholder="name" name="name" onChange={formsValue}/>
                                    </Form.Group>
                                </Col>

                                <Col lg={3}>
                                    <Form.Group className="mb-3" controlId="username">
                                        {/*<Form.Label>username</Form.Label>*/}

                                        <Form.Control type="text" placeholder="username"   name="username" onChange={formsValue}/>
                                    </Form.Group>
                                </Col>

                                <Col lg={3}>
                                    <Form.Group className="mb-3" controlId="email">
                                        {/*<Form.Label>emailа</Form.Label>*/}
                                        <Form.Control type="text" placeholder="email" name="email" onChange={formsValue}/>
                                    </Form.Group>
                                </Col>

                                <Col lg={3}>
                                    <Button type="submit" variant="success" className="w-100">
                                        register user
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        {
                            massage
                            &&
                            <Alert variant={variant}>{massage}</Alert>
                        }
                    </>
            }
        </Container>
    );
}

export default UserRegisterPage;