import streams from "../apis/streams";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from "./types";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//These action creators are utilizing thunk. I think this is why
//we need to dispatch manually?
export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("./streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  //manually forces the app back to the home page
  history.push("/");
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("./streams");

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

//Put request: Whatever properties are included in the request
//             are the only ones that will get saved on the record.
//             Any properties not included in te updated will be lost

//Patch request: Ensures that updates to a subset of properties on
//               the record don't erase other properties
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
