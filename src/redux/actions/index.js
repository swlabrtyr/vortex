import { MAX_EVENTS } from "../../constants";
import { INIT_STATE_LENGTH} from  "../../constants";

export const ADD_EVENT = "ADD_EVENT";
export const POP_EVENT = "POP_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const TOGGLE_EVENT = "TOGGLE_EVENT";
export const EDIT_EVENT = "EDIT_EVENT";
export const TOGGLE_PLAYBACK = "TOGGLE_PLAYBACK";

let newEventId = INIT_STATE_LENGTH; 
let playback = true;

export const togglePlayBack = () => ({
  type: TOGGLE_PLAYBACK,
  playback
});

export const addEvent = content => {
  return {
    type: ADD_EVENT,
    id: newEventId > MAX_EVENTS ? MAX_EVENTS : newEventId++, 
    content,
    isArmed: true
  };
}; 

export const removeEvent = () => ({
  type: REMOVE_EVENT,
  id: newEventId <= 0 ? {} : --newEventId
});

export const popEvent = id => {
  newEventId--; // decrement event id to match array index
  return {
    type: POP_EVENT,
    id,
  };
};

export const toggleEvent = id => ({
  type: TOGGLE_EVENT,
  id
});

export const editEvent = (id, content) => ({
  type: EDIT_EVENT,
  id,
  content
});
