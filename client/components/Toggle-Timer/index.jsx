import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTimer } from '../../actions/actions';
import present from './toggle-timer-present';

const mapStateToProps = state => ({
  allownew: state.allownew,
  timer: state.timer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleTimer }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
