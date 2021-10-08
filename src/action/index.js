// export const fetchPosts = () => {
//   //bad approach
//   // const response = await jsonplaceholder.get("/posts");

//   return async function (dispatch, getState) {

//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: "FETCH_Posts", payload: response });
//   };
// };
// //do not need to return an object, rather dispatch an object.
//MAJOR REFACTOR BELOW

import jsonPlaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
