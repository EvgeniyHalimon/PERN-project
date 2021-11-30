const initialState ={
    loggedIn : false,
    signedUp : false,
    loggedOut : false,
    token: ''
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
            ...state,
            loggedOut : action.payload,
        }
    case 'TOKEN':
        return {
            ...state,
            token : action.payload,
        }    
    default:
        return state
    }
}

export default reducer