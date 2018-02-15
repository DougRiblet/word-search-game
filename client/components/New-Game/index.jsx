import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NEW_GAME } from '../../actions/actions';
import present from './new-game-present';

const mapStateToProps = state => ({
  allownew: state.allownew,
});

const mapDispatchToProps = dispatch => bindActionCreators({ NEW_GAME }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(present);
