import jsonPlaceholder from "../apis/jsonplaceholder";

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

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_Posts", payload: response });
};
