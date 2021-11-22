import {GET_CART_REQUEST, GET_CART_SUCCESS, GET_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE} from "../actions/productAction"



const initialState = {
    cart: [],
    loading: false,
    error: ""
}


export const productReducer = (state= initialState, action) => {
    switch (action.type) {

        // case ADD_TO_CART_REQUEST:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: ""
        //     }

        // case ADD_TO_CART_SUCCESS:
        //     const item = state.cart.find((cart) => cart.id === action.payload.id)
        //     const isIn = state.cart.find((cart) => cart.id === action.payload.id ? true: false)
        //     return {
        //         ...state,
        //         cart: isIn ? state.cart.map(cart => cart.id === action.payload.id ? {...cart, count: cart.count + 1}: cart): action.payload
        //     }

        case ADD_TO_CART_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
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