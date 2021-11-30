import React, {useState} from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, FormControl, Box}  from '@mui/material';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setSignedUp } from '../actions/actions';
import { connect } from 'react-redux';
// const store = new AuthStore()

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .min(1, 'Username is too short - should be 8 chars minimum.')
        .max(20, 'Must be 20 characters or less')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
})

function SignUp(){
    const navigate = useNavigate()
    const [status, setStatus] = useState('')
    const dispatch = useDispatch()
    
    const formik = useFormik({
    initialValues: {
        username: '',
        email: '',
        password: '',
        roles: ['User']
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        console.log(values)
        axios.post('http://localhost:3000/api/auth/signup', {
            username : values.username,
            email: values.email,
            password: values.password,
            roles: ['User']
        })
        .then(res => {
            if(res.status === 200){
                setStatus('The form has been submitted')
                dispatch(setSignedUp(true))
                navigate("/home")
            }
        })
        .catch(err => console.log(err))
    },
    });

    return (
        <Box
            className="form-container"
            onSubmit={formik.handleSubmit}
            component="form"
            className='form'
            >
            <FormControl>
            <TextField
                fullWidth
                id="username"
                name="username"
                label="Username"
                type="username"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>
            </FormControl>
            <div>{status}</div>
        </Box>
    )
}

export default connect()(SignUp)

