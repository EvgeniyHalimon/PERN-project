const initialState ={
    loggedIn : false,
    signedUp : false,
    loggedOut : false
}

const reducer = (state = initialState, action) => {
    console.log('~TYPE OF ACTION~', action.type)
    switch (action.type){
    case 'LOG_IN':
        return {
            loggedIn : action.payload,
            signedUp : true,
            loggedOut : true
        }
    case 'SIGN_UP':
        return {
            signedUp : action.payload,
            loggedIn : false,
            loggedOut : true
        }
    case 'LOG_OUT':
        return {
            loggedOut : action.payload,
            ...state
        }
    default:
        return state
    }
}

export default reducer