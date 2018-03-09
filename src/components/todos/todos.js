import React, { Component } from 'react';
import { render } from 'react-dom';
import store from '../../store/store';
import './todos.css';
import classnames from 'classnames';


const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul className="list-group">
      { todos.map((todo, index) => (
          <li className={`list-group-item ${todo.completed ? 'completed' : ''}`} key="{todo.id}" onClick={() => onTodoClick(index)}>{todo.text}</li>
        )) 
      }
    </ul>
  )
};

const AddTodo = ({onAddClick}) => {
    return (
      <div>
        <input type="text" ref={input => {this.textInput = input;}}/>
        <button 
          type="button" 
          onClick={() => {
            onAddClick(this.textInput.value);
            this.textInput.value = '';
          }}
        >
          Add item
        </button>
      </div>
    )
}

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.todos = [];
  }
  
  componentDidMount() {
    this.todos = this.store.getState().todos;
    
    this.store.subscribe(() => {
      this.todos = this.store.getState().todos;
      this.forceUpdate();
    });
  }
  
  addItem = (text) => {
    this.store.dispatch({ type: 'ADD_TODO', text })
  }
  
  toggleItem = (index) => {
    this.store.dispatch({ type: 'TOGGLE_TODO', index });
  }
  
  render() {
    return (
      <div>
        <AddTodo onAddClick={this.addItem}/>
        <TodoList todos={this.todos} onTodoClick={this.toggleItem}/>
      </div>
    )
  }
}
