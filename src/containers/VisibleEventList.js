import { connect } from "react-redux";
import { scheduleEvent, toggleEvent, VisibilityFilters } from "../redux/actions";
import EventList from "../components/EventList";

const getVisibileEvents = (events, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_SELECTED:
      return events.filter(e => e.isArmed);
    case VisibilityFilters.SHOW_ACTIVE:
      return events.filter(e => !e.isArmed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return events;
  }
};

const mapStateToProps = state => {
  return {
    events: getVisibileEvents(state.events, state.visibilityFilter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleEvent: id => {
      return dispatch(toggleEvent(id));
    },
    scheduleEvent: id =>{
      return dispatch(scheduleEvent(id))
    }
  };
};

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default VisibleEventList;
