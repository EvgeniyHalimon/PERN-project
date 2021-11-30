const setLoggedIn = (bool) => {
    return{
        type:'LOG_IN',
        payload:bool
    }
}

const setSignedUp = (bool) => {
    return{
        type:'SIGN_UP',
        payload: bool
    }
}

const setLoggedOut = (bool) => {
    return{
        type : 'LOG_OUT',
        payload: bool
    }
}

export{
    setLoggedIn,
    setSignedUp,
    setLoggedOut
}