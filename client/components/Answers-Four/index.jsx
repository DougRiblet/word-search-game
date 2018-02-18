import { connect } from 'react-redux';
import present from './answers-four-present';

const alphabetize = arr => (arr ? arr.sort().join(' ') : '');

const mapStateToProps = state => ({
  poolfour: alphabetize(state.poolfour),
  foundfour: alphabetize(state.foundfour),
  wrongfour: alphabetize(state.wrongfour),
  poollength: state.poollength,
  foundlength: state.foundlength,
  showmissed: state.showmissed,
});

export default connect(mapStateToProps)(present);
