import { connect } from 'react-redux';
import present from './quiz-seven-present';

const capitalize = word => word.toUpperCase();

const mapStateToProps = (state) => ({
  'currentseven': capitalize(state.currentseven)
});

export default connect(mapStateToProps)(present);
