import firebase from "../firebase"
import md5 from "md5";




export const SET_USER = "SET_USER"
export const SET_USER_SUCCESS = "SET_USER_SUCCESS"
export const SET_USER_FAILURE = "SET_USER_FAILURE"



export const CLEAR_USER = "CLEAR_USER"



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

export const clearUser = () => {
    return {
        type: CLEAR_USER
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
                // const data = response.json()
                dispatch(setUserSuccess(createdUser))
                // dispatch(closeSignupSection())
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