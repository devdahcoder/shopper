import {SET_USER} from "../actions/setUser"



const initialState = {
    currentUser: null,
    isLoading: true
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false,
            }


        default:
            return state;
    }
}



export default userReducer;