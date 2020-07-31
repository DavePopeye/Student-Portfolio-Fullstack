import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import projectsReducer from "../reducers/projects";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  projects: [{}],
};

export default function configureStore() {
  return createStore(
    projectsReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}
