import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
// import cartReducer from "./cartReducer"
import wishListReducer from "./wishListReducer"
import userReducer from "./userReducer"
import productReducer from "./productReducer"

const rootReducer = combineReducers({
    login : loginReducer,
    // cartItems: cartReducer,
    wishLists: wishListReducer,
    user: userReducer,
    cartList: productReducer
});


export default rootReducer;