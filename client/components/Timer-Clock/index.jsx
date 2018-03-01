import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tickTock, endGame } from '../../actions/actions';
import present from './timer-clock-present';

const mapStateToProps = state => ({
  isclicking: state.isclicking,
  secondsleft: state.secondsleft,
  timer: state.timer,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  tickTock,
  endGame,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
