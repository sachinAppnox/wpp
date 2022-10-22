import { createStore } from "redux";
import { rootReducers } from "./Reducer/Index";
const store = createStore(rootReducers);
export default store;
