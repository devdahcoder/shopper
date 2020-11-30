import {ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST} from "../actions/wishListAction"
import {v4 as uuid} from "uuid";

const initialValue = [
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
  {
    id: uuid(),
    suppliers: "Supplier’s Name Here",
    product: "Product Name Here",
    price: "$29,354.75",
  },
];


const initialState = {
    wishLists: initialValue
}

const wishListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISH_LIST:
            return {

            }
        case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                wishLists: state.wishLists.filter((wishList, id) => id !== action.payload)
            }
        default:
            return state
    }
}

export default wishListReducer