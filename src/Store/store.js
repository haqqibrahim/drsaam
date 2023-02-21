import { createStore,combineReducers } from "redux";
import timerReducer from "../Reducer/timeReducer";

const store = createStore(
  combineReducers({
    timer: timerReducer,
  })
);

export default store;
