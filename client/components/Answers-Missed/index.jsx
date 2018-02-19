import { connect } from 'react-redux';
import present from './answers-missed-present';

const alphabetize = arr => (arr ? arr.sort().join(' ') : '');

const mapStateToProps = state => ({
  poolfour: alphabetize(state.poolfour),
  showmissed: state.showmissed,
});

export default connect(mapStateToProps)(present);
