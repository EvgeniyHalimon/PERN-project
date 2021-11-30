import React from 'react';
const jwt = require('jsonwebtoken')


function Home(){
    const token = localStorage.getItem('token')
    const decodeToken = jwt.decode(token)
    console.log(decodeToken)
    return(
        <h1>Welcome back,{decodeToken.username}</h1>
    )  
}

export default Home