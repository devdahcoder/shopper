import {SET_USER, SET_USER_SUCCESS, SET_USER_FAILURE, CLEAR_USER} from "../actions/setUser"



const initialState = {
    currentUser: null,
    isLoading: false,
    error: ""
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        
        case SET_USER_SUCCESS:
            return {
                isLoading: false,
                currentUser: action.payload,
                error: ""
            }
        case SET_USER_FAILURE:
            return {
                isLoading: false,
                currentUser: null,
                error: action.payload
            }
        case CLEAR_USER:
            return {
                ...initialState,
                isLoading: false,
            }


        default:
            return state;
    }
}



export default userReducer;