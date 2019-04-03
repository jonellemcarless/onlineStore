import { createStore, combineReducers, compose } from "redux";
import cartReducer from "../components/dashboard/cart/reducer"
import thunk from "redux-thunk";
import rootReducer from "./reducers";


const initialState = {};
const middleware = [thunk];

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
