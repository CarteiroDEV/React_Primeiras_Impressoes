import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItens extends Component {
    getStyle = () =>{
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    toggleComplete = (e) =>{
        console.log(this.props)
    }
  
    render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
            <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
            {title}
            <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
        </p>
      </div>
    )
  }
}

const btnStyle ={
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    outline: 'none'
}

//PROP TYPES VALIDAÇÃO
TodoItens.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,  
}

export default TodoItens
