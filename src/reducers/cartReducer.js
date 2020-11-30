import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import { v4 as uuid } from "uuid";

const initialValue = [
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29.75",
    qty: 1,
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29.75",
    qty: 1,
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "29.75",
    qty: 1,
  },
];

const initialState = {
    cartItems: initialValue
}


const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.find(cart => cart.id === action.payload).find
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((cart, id) => id !== action.payload)
            }
        default:
            return state
    }
};

export default cartReducer;