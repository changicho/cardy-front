import { combineReducers } from "redux";

import { chattingReducer, State as ChattingState } from "./chattingReducer";
import { userInfoReducer, State as UserInfoState } from "./userInfoReducer";

export type State = ChattingState | UserInfoState;

export const rootReducer = combineReducers({
  chattingReducer,
  userInfoReducer,
});
