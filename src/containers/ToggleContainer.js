import { connect } from "react-redux";
import { togglePlayBack } from "../redux/actions";
import Toggle from "../components/Toggle";

const mapStateToProps = state => {
  return {
    playback: state.playback.playback
  };
}

const mapDispatchToProps = dispatch => {
  return {
   onToggleClick: () =>  {dispatch(togglePlayBack())}
  };
};

const ToggleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);

export default ToggleContainer;
