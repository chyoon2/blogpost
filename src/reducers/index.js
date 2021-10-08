import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";
import UserReducer from "./UserReducer";

export default combineReducers({
  posts: PostsReducer,
  // user: UserReducer,
});
