import {GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE} from "../actions/productAction"



const initialState = {
    cart: [],
    loading: false,
    error: ""
}


export const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_CART_REQUEST:
            return {
                ...state,
                loading: true,
                error: ""
            }

        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: action.payload,
                error: ""
            }

        case GET_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}


export default productReducer;