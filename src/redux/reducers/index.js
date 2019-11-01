import { combineReducers } from "redux";
import {
  ADD_EVENT,
  TOGGLE_EVENT,
  EDIT_EVENT,
  TOGGLE_PLAYBACK,
  REMOVE_EVENT,
  POP_EVENT
} from "../actions";

const initState = {
  playback: true,
  events: []
};

const events = (events = initState.events, action) => {
  let n = -1;

  const increment = () => {
    n += 1;
    return n;
  };

  switch (action.type) {
    case ADD_EVENT:
      return [
        ...events,
        {
          id: action.id,
          content: action.content, // make sure content is not undefined
          isArmed: true
        }
      ];
    case REMOVE_EVENT:
      return [...events.slice(0, -1).concat()];
    case POP_EVENT:
      n = -1;
      return events
        .filter(event => {
          // Remove event
          return event.id !== action.id;
        })
        .map(event => {
          // Update **entire** events state to keep array index and event.id equal
          return {
            ...event,
            id: increment()
          };
          /* Increment ensures that event.id is always equal to the events array index, 
           helping keep scheduling and event handling correct during sequencing
        */
        });
    case TOGGLE_EVENT:
      return events.map(event =>
        event.id === action.id ? { ...event, isArmed: !event.isArmed } : event
      );
    case EDIT_EVENT:
      return events.map(event =>
        event.id === action.id ? { ...event, content: action.content } : event
      );
    default:
      return events;
  }
};

const playback = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_PLAYBACK:
      return { playback: !state.playback };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  initState,
  events,
  playback
});

export default rootReducer;
