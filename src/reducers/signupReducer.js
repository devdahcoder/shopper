import {DISPLAY_SIGNUP_SECTION, CLOSE_SIGNUP_SECTION} from "../actions/signupAction"



const initialState = {
    showSignup: false
}


const signupReducer = (state = initialState, action) => {
    switch(action.type) {
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


export default signupReducer