import { legacy_createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { fetchdataReducer } from "./fetchdata/fetchdatareducer";
let reducers = combineReducers({
    fetchreducer:fetchdataReducer
})

export const store = legacy_createStore(reducers,applyMiddleware(thunk))