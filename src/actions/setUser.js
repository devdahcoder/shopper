import firebase from "../firebase"
import md5 from "md5";
import {closeSignupSection, closeLoginSection} from "./loginAction";

export const SET_USER = "SET_USER"
export const SET_USER_SUCCESS = "SET_USER_SUCCESS"
export const SET_USER_FAILURE = "SET_USER_FAILURE"

export const LOG_USER = "LOG_USER"
export const LOG_USER_SUCCESS = "LOG_USER_SUCCESS"
export const LOG_USER_FAILURE = "LOG_USER_FAILURE"

export const CLEAR_USER = "CLEAR_USER"
export const CLEAR_USER_SUCCESS = "CLEAR_USER_SUCCESS"
export const CLEAR_USER_FAILURE = "CLEAR_USER_FAILURE"


// SET USER 
export const setUser = () => {
    return {
        type: SET_USER,
    }
}

export const setUserSuccess = (user) => {
    return {
        type: SET_USER_SUCCESS,
        payload: user
    }
}

export const setUserFailure = (error) => {
    return {
        type: SET_USER_FAILURE,
        payload: error
    }
}

// LOG USER 

export const logUserIn = () => {
    return {
        type: LOG_USER,
    }
}

export const logUserSuccess = (user) => {
    return {
        type: LOG_USER_SUCCESS,
        payload: user
    }
}

export const logUserFailure = (error) => {
    return {
        type: LOG_USER_FAILURE,
        payload: error
    }
}


//LOG USER OUT
export const clearUser = () => {
    return {
        type: CLEAR_USER
    }
}

export const clearUserSuccess = () => {
    return {
        type: CLEAR_USER_SUCCESS,
    }
}

export const clearUserFailure = (error) => {
    return {
        type: CLEAR_USER_FAILURE,
        payload: error
    }
}



export const getUser = (values) => {
    return (dispatch) => {
        dispatch(setUser())
        firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then(createdUser => {
                console.log(createdUser)
                dispatch(setUserSuccess(createdUser))
                dispatch(closeSignupSection())
                createdUser.user.updateProfile({
                displayName: values.username,
                photoURL: `https://gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,

                })
                .then(() => {
                // saveUser(createdUser).then(() => {
                //   console.log("User saved")
                // }) // we might also uncomment this later



                firebase.database().ref("users").child(createdUser.user.uid).set({
                    name: createdUser.user.displayName,
                    avatar: createdUser.user.photoURL
                }) // and we might delete this if we uncomment others
                })
                .catch(error => {
                console.log(error)
                })
            })
            .catch(error => {
                console.log(error)
                dispatch(setUserFailure(error))
            })
            
    }
}

export const logUser = (values) => {
    return (dispatch) => {
        dispatch(logUserIn())
        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(signedUserIn => {
                console.log(signedUserIn)
                dispatch(logUserSuccess(signedUserIn))
                dispatch(closeLoginSection())
                console.log("user logged in")
                // resetForm({values: ""})
            })
            .catch(error => {
                dispatch(logUserFailure(error))
                console.log(error)
            })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(clearUser())
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(clearUserSuccess())
                console.log("User logged out")
            
            })
            .catch((error) => {
                dispatch(clearUserFailure(error))
                console.log(error)
            })
    }
}