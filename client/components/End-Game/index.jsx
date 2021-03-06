import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { endGame } from '../../actions/actions';
import present from './end-game-present';

const mapStateToProps = state => ({
  allownew: state.allownew,
});

const mapDispatchToProps = dispatch => bindActionCreators({ endGame }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
