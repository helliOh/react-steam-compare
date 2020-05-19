import Container from '../Container';
import * as actions from '../../Actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    scrollNeedUpdate : state.scrollNeedUpdate
  });
  
const mapDispatchToProps = (dispatch) =>({
    onScrollNeedUpdate : () => dispatch(actions.scrollNeedUpdate())
});

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);

export default MainContainer;