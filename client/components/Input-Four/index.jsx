import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { guessRight, guessWrong } from '../../actions/actions'; 
import present from './input-four-present';

const mapStateToProps = (state) => ({
  poolfour: state.poolfour,
  foundfour: state.foundfour,
  wrongfour: state.wrongfour
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ guessRight, guessWrong }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(present);