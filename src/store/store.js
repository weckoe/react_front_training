import thunk from "redux-thunk";
import {rootReducer} from "./reducers";

import { createStore, applyMiddleware } from 'redux'

export const store = createStore(rootReducer, applyMiddleware(thunk));