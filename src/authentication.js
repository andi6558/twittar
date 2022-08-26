import React from "react";

import { Button, Form, Modal } from 'react-bootstrap';
import { login, signup } from "./api";

export class UserSignupBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleSubmit(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        signup(username, password).then(data => {
            this.handleClose();
            alert(`User ${username} created successfully`);
        }).catch(err => {
            alert(err);
            console.log(err);
        }).finally(() => {
            this.refs.username.value = '';
            this.refs.password.value = '';
        });
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={() => this.setState({ show: true })}>
                    Signup
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" ref="username" placeholder="Enter username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export class UserLoginBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            show: false,
        };
        // bind
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let response = login(this.state.username, this.state.password);
        response.then(data => {
            this.handleClose();
            alert(`User ${this.state.username} logged in successfully.`);
            console.log("Token:", data.token);
            localStorage.setItem('token', data.token);
        });
        response.catch(err => {
            alert(err);
            console.log(err);
        });
        this.handleClose();
    }
    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.handleShow}>
                    Login
                </Button>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter username" name="username" value={this.state.username} onChange={this.handleChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}