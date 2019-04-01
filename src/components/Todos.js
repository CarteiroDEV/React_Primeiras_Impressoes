import React, { Component } from 'react';
import TodoItens from './TodoItens';
import PropTypes from 'prop-types';

class Todos extends Component {
    toggleComplete = () =>{
        console.log('HELLO!!')
    }

    render() {
        return this.props.todos.map((todo) =>(
            <TodoItens key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} 
            deleteTodo={this.props.deleteTodo} />
    ));
    
  }
}

//PROP TYPES VALIDAÇÃO
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,  
}

export default Todos;