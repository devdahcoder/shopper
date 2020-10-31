import { DISPLAY_LOGIN_SECTION, CLOSE_LOGIN_SECTION } from "../actions/loginAction"


const initialState = {
    showLogin: false
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
        default:
            return state
    }
}

export default loginReducer