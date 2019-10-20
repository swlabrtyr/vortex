import { connect } from "react-redux";
import { toggleEvent } from "../redux/actions";
import InnerEventList from "../components/InnerEventList";

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

const InnerEventContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerEventList);

export default InnerEventContainer;
