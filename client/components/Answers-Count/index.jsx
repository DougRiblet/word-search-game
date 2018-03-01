import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endGame } from '../../actions/actions';
import present from './answers-count-present';

const mapStateToProps = state => ({
  poollength: state.poollength,
  foundlength: state.foundlength,
  allownew: state.allownew,
});

const mapDispatchToProps = dispatch => bindActionCreators({ endGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
