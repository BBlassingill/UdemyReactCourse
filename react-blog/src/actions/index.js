import _ from "lodash";
import jsonPlaceHolder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); //equivalent to saying execute() so that the chain will run
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceHolder.get("/users/" + userId);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//Memoized version of fetching user
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//   const response = await jsonPlaceHolder.get("/users/" + userId);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
