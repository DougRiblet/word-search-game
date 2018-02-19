import { connect } from 'react-redux';
import present from './answers-right-present';

const alphabetize = arr => (arr ? arr.sort().join(' ') : '');

const mapStateToProps = state => ({
  foundfour: alphabetize(state.foundfour),
});

export default connect(mapStateToProps)(present);
