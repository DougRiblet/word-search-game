import { connect } from 'react-redux';
import present from './answers-four-present';

const alphabetize = arr => arr.sort();

const mapStateToProps = state => ({
  poolfour: alphabetize(state.poolfour),
  foundfour: alphabetize(state.foundfour),
  wrongfour: alphabetize(state.wrongfour),
  showmissed: state.showmissed,
});

export default connect(mapStateToProps)(present);
