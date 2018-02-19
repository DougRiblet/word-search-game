import { connect } from 'react-redux';
import present from './answers-wrong-present';

const alphabetize = arr => (arr ? arr.sort().join(' ') : '');

const mapStateToProps = state => ({
  wrongfour: alphabetize(state.wrongfour),
});

export default connect(mapStateToProps)(present);
