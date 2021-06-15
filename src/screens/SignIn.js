import React, { useState } from 'react';
import { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { authContext } from '../contexts/AuthContext';

const SignIn = ({ history }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { setAuthData } = useContext(authContext);

    const onFormSubmit = () => {
        const e_mail = document.getElementById("email").value
        const pass_word = document.getElementById("password").value

        if (!e_mail || !pass_word) {
            return alert("you need to fill up all the forms.");
        }
        let user_data = {
            email: e_mail,
            password: pass_word
        }
        let user_data_str = JSON.stringify(user_data);
        let clientsArr = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = clientsArr.find(user => JSON.stringify(user) === user_data_str);
        if (userExists) {
            return alert("User already Exists");
        }
        clientsArr.push(user_data);
        //save to localStorage
        localStorage.setItem("users", JSON.stringify(clientsArr));
        return alert("Account Created!");
    }

    const onFormSubmitt = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        setAuthData(email); // typically here we send a request to our API and in response, we receive the user token.
        //As this article is about the front-end part of authentication, we will save in the context the user's email.
        history.replace('/'); //after saving email the user will be sent to Panel;
        // we will change it later;
    };
    return (
        <div
            style={{ height: "100vh" }}
            className="d-flex justify-content-center align-items-center"
        >
            <div style={{ width: 300 }}>
                <h1 className="text-center">Sign in</h1>
                <Form onSubmit={onFormSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mt-3"
                    >
                        Sign in
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignIn;