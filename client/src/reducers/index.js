import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import cartReducer from "../components/dashboard/cart/reducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  cart:cartReducer
});