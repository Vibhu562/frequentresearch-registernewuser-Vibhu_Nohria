import {combineReducers }from 'redux';
import { newregisterNewUserReducer,getAllNewUsersReducer } from "./reducers/newuserReducer";
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
  newregisterNewUserReducer:newregisterNewUserReducer,
  getAllNewUsersReducer:getAllNewUsersReducer,
  
  })

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : []

const initialState = {
  cartReducer : {cartItems : cartItems},
  loginReducer : {currentUser : currentUser}
}

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });

const store = createStore(finalReducer , initialState, composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))
 export default store 