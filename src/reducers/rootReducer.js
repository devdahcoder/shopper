import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
import signupReducer from "./signupReducer"
import cartReducer from "./cartReducer"
import wishListReducer from "./wishListReducer"
import userReducer from "./userReducer"


const rootReducer = combineReducers({
    login : loginReducer,
    signup: signupReducer,
    cartItems: cartReducer,
    wishLists: wishListReducer,
    userReducer: userReducer
});


export default rootReducer;