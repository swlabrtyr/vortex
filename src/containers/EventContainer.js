import { connect } from "react-redux";
import { toggleEvent } from "../redux/actions";
import EventList from "../components/OuterEventList";

const mapStateToProps = state => {
  return {
    events: state.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    toggleEvent: id => {
      return dispatch(toggleEvent(id));
    }
  };
};

const EventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default EventContainer;
