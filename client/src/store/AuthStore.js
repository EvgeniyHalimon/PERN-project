import { observable, makeObservable, action } from 'mobx'

export default class AuthStore{
    loggenIn = false
    signedUp = false
    loggedOut = false

    setLoggedIn(bool){
        this.loggenIn = bool
    }

    setSignedUp(bool){
        this.signedUp = bool
    }

    setLoggedOut(bool){
        this.loggedOut = bool
    }

    constructor(){
        makeObservable(this,{
            loggenIn: observable,
            signedUp: observable,
            loggedOut: observable,
            setLoggedIn: action.bound,
            setSignedUp: action.bound,
            setLoggedOut: action.bound
        })
    }
}