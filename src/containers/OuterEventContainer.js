import { connect } from "react-redux";
import { toggleEvent } from "../redux/actions";
import OuterEventList from "../components/OuterEventList";

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

const OuterEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OuterEventList);

export default OuterEventContainer;
