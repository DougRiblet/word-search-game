import { connect } from 'react-redux';
import present from './answers-count-present';

const mapStateToProps = state => ({
  poollength: state.poollength,
  foundlength: state.foundlength,
});

export default connect(mapStateToProps)(present);
