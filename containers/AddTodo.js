import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends React.Component{
    render(){
        let input;
        return(
                <div>
                  <form onSubmit={e => {
                        e.preventDefault();
                        if(!input.value.trim()){ return ; }
                        // ActionCreator から Actionを取得し,Store に渡している
                        this.props.dispatch(addTodo(input.value));
                    }}>
                    <input ref={node => {
                          input = node;
                      }} />
                    <button type="submit">
                      Add Todo
                    </button>
                  </form>
                </div>
        );
    }

}

export default connect()(AddTodo);
