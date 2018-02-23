import {connect} from 'react-redux';
import TodoHeader from '../../components/TodoHeader';
import { changeText, createTodo } from '../../actions';

const mapStateToProps = (state) => ({
  todo: state.getIn(['todo','todo'])
});

const mapDispatchToProps = (dispatch) => ({
  onChangeText:  (event)=>(
    dispatch(changeText({ text: event.target.value }))
  ),
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({text: ''}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);

