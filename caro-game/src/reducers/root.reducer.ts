import { combineReducers } from "@reduxjs/toolkit";
import { authenReducer } from "./authen.reducer";

const rootReducer = combineReducers({ authen: authenReducer });

export default rootReducer;
