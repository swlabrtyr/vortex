import { combineReducers } from "redux";
import {
  ADD_EVENT,
  TOGGLE_EVENT,
  EDIT_EVENT,
  SET_VISIBILITY_FILTER,
  TOGGLE_PLAYBACK,
  VisibilityFilters,
  REMOVE_EVENT
} from "../actions";

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        {
          id: action.id,
          content: action.content, // make sure content is not undefined
          isArmed: true,
        }
      ];
    case REMOVE_EVENT:
      return [...state.slice(0, -1).concat()];
    case TOGGLE_EVENT:
      return state.map(event =>
        event.id === action.id ? { ...event, isArmed: !event.isArmed } : event
      );
    case EDIT_EVENT:
      return state.map(event =>
        event.id === action.id ? { ...event, content: action.content } : event
      );
    default:
      return state;
  }
}

const isPlaying = (state = false, action) => {
  console.log('isPlaying reducer')
  switch (action.type) {
    case TOGGLE_PLAYBACK:
      return !state.isPlaying
    default:
      return state;
  } 
} 

const vortexApp = combineReducers({
  visibilityFilter,
  events,
  isPlaying
});

export default vortexApp;
