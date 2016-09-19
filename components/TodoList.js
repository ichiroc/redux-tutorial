import React, { PropTypes } from 'react';
import Todo from './Todo';


// TodoList の実態は <ul>-</ul>
// リストの中の <li> はTodo を使用している


class TodoList extends React.Component{
    render(){
        return(
                <ul>
                {this.props.todo.map(todo =>
                                     <Todo
                                     key={todo.id}
                                     {...todo}
                                     onclick={() => this.props.onTodoClick(todo.id)}
                                     />
                                    )}
            </ul>
        );
    }
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id:  PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired ).isRequired,
    onTodoClick : PropTypes.func.isRequired
};
