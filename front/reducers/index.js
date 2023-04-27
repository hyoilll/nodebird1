import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux"; //関数を合わせる

import user from "./user";
import post from "./post";

const initialState = {
  user: {},
  post: {},
};

//action creator -> dynamic action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };

// (prev state, action) => next state
const rootReducer = combineReducers({
  // server side rendringのためindexを追加する
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
