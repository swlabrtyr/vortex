import { MAX_EVENTS } from "../../constants";

export const ADD_EVENT = "ADD_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const TOGGLE_EVENT = "TOGGLE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

let newEventId = 0;

const setId = id => {
  if (id > MAX_EVENTS) {
    return MAX_EVENTS;
  } else if (id < 0) {
    return 0;
  } else {
    return newEventId++;
  }
};

export const addEvent = content => ({
  type: ADD_EVENT,
  id: setId(newEventId),
  content
});

export const removeEvent = id => ({
  type: REMOVE_EVENT,
  id: newEventId < 0 ? {} : --newEventId
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
