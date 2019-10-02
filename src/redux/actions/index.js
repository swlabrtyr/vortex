import { MAX_EVENTS } from "../../constants";

export const ADD_EVENT = "ADD_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const TOGGLE_EVENT = "TOGGLE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const TOGGLE_PLAYBACK = "TOGGLE_PLAYBACK";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let newEventId = 0;

export const playBack = () => ({
  type: TOGGLE_PLAYBACK,
})

export const addEvent = content => ({
  type: ADD_EVENT,
  id: newEventId > MAX_EVENTS ? MAX_EVENTS : newEventId++, 
  content
});

export const removeEvent = () => ({
  type: REMOVE_EVENT,
  id: newEventId <= 0 ? {} : --newEventId
});

export const toggleEvent = id => ({
  type: TOGGLE_EVENT,
  id
});
export const editEvent = (id, content) => ({
  type: EDIT_EVENT,
  id,
  content
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});
