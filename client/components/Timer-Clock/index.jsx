import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame } from '../../actions/actions';
import present from './timer-clock-present';

const mapStateToProps = state => ({
  allownew: state.allownew,
  timer: state.timer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ newGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
