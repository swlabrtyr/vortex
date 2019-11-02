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
   onEventClick: id => {
      return dispatch(toggleEvent(id));
    },
    onPopClick: id => {
      return dispatch(popEvent(id));
    }
  };
};

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList);

export default List;
