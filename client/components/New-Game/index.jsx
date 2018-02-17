import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGame } from '../../actions/actions';
import present from './new-game-present';

const mapStateToProps = state => ({
  allownew: state.allownew,
});

const mapDispatchToProps = dispatch => bindActionCreators({ newGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);