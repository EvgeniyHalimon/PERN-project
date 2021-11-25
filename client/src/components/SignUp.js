import React, { useState, useReducer } from 'react';
import {Form, Button, Container} from 'react-bootstrap'


const formReducer = (state, event) => {
    return {
        ...state,
        [event.name] : event.value
    }
}

function SignUp(){
    const [formData, setFormData] = useReducer(formReducer, {role: 'Admin'})
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true)
        console.log(`The name you entered was: ${formData.name}`)
        console.log(`The surname you entered was: ${formData.surname}`)
        console.log(`The email you entered was: ${formData.email}`)
        console.log(`The role you entered was: ${formData.role}`)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        })
    }

    return(
        <Container>
            <Form
            noValidate 
            validated={validated}
            onSubmit={handleSubmit}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                            />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please type a name.
                        </Form.Control.Feedback>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="surname"
                        placeholder="Surname" 
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please type a surname.
                    </Form.Control.Feedback>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Please type an email.
                    </Form.Control.Feedback>

                    <Form.Label>Role</Form.Label>
                    <Form.Select
                        name="role"
                        aria-label="Default select example"
                        onChange={handleChange}
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </Form.Select>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button 
                    variant="primary"
                    type="submit"
                    >
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default SignUp
