import { connect } from "react-redux";
import { toggleEvent, popEvent } from "../redux/actions";
import EventList from "../components/EventList";

const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleEvent: id => {
      return dispatch(toggleEvent(id));
    },
    popEvent: id => {
      return dispatch(popEvent(id));
    }
  };
};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventContainer;
