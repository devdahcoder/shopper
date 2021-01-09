import { DISPLAY_LOGIN_SECTION, CLOSE_LOGIN_SECTION, DISPLAY_SIGNUP_SECTION, CLOSE_SIGNUP_SECTION } from "../actions/loginAction"


const initialState = {
    showLogin: false,
    showSignup: false
}



const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_LOGIN_SECTION:
            return {
                ...state,
                showLogin: true
            }
        case CLOSE_LOGIN_SECTION:
            return {
                ...state,
                showLogin: false
            }
        case DISPLAY_SIGNUP_SECTION:
            return {
                ...state,
                showSignup: true
            }
        case CLOSE_SIGNUP_SECTION:
            return {
                ...state,
                showSignup: false
            }
        default:
            return state
    }
}

export default loginReducer