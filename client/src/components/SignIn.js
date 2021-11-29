import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, FormControl, Box}  from '@mui/material';
import {Alert} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import AuthStore from '../store/AuthStore';
import {observer} from 'mobx-react-lite'

const store = new AuthStore()

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required.') 
})

export const SignIn = observer(() => {
    const navigate = useNavigate()
    const [status, setStatus] = useState('')
    const [error, setError] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('http://localhost:3000/api/auth/signin', {
                email: values.email,
                password: values.password,
            })
            .then(res => {
                console.log(res)
                console.log(res.status)
                if(res.status === 200){
                    store.setSignedUp(!false)
                    store.setLoggedIn(!false)
                    console.log('IN SIGNIN COMPONENT',store.loggenIn)
                    navigate('/home')
                }
            })
            .catch(err => {
                console.log(err)
                if(err.response.status === 401){
                    setError(true)
                    setStatus('Invalid password')
                } else if (err.response.status === 404){
                    setError(true)
                    setStatus('User not found')
                }
            })
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
            {error ? 
            <Alert variant='danger'>
                {status}
            </Alert> :
            <div></div>
            }
        </Box>
    )
})

