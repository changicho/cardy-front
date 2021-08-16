import { createStore } from "@reduxjs/toolkit";

import { reducer } from "@/reducers";

const initialState = {};

export const store = createStore(reducer, initialState);
