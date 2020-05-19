import GameCardBoard from '../GameCardBoard';
import * as actions from '../../Actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>({
    scrollNeedUpdate : state.scrollNeedUpdate
  });
  
const mapDispatchToProps = (dispatch) =>({
    onUpdateScroll : () => dispatch(actions.updateScroll())
});

const GameCardBoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameCardBoard);

export default GameCardBoardContainer;