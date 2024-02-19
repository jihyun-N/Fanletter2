import { combineReducers, createStore } from "redux";
import letters from "store/modules/letters";
import member from "store/modules/member";

const rootReducer = combineReducers({ letters, member });

const store = createStore(rootReducer);

export default store;
