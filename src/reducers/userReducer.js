import {SET_USER, SET_USER_SUCCESS, SET_USER_FAILURE, CLEAR_USER, CLEAR_USER_SUCCESS, CLEAR_USER_FAILURE, LOG_USER, LOG_USER_SUCCESS, LOG_USER_FAILURE} from "../actions/setUser"



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

        case LOG_USER:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        
        case LOG_USER_SUCCESS:
            return {
                isLoading: false,
                currentUser: action.payload,
                error: ""
            }
        case LOG_USER_FAILURE:
            return {
                isLoading: false,
                currentUser: null,
                error: action.payload
            }

        case CLEAR_USER:
            return {
                ...state,
                isLoading: true,
            }

        case CLEAR_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: null //might want to set this to null
            }

        case CLEAR_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }


        default:
            return state;
    }
}



export default userReducer;