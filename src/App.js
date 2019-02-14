import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor () {
    super();
    this.state= {
      todos: [],
      inputText: ""
    }
  }

    addTask = e => {
      e.preventDefault();
      this.setState({
        todos : [
          ...this.state.todos,
          { task : this.state.inputText, 
            id: Date.now(), 
            completed: false
          }
        ],        
        inputText: ""
      })      
    }

    toggleCompleted = id => {
      const newTodo = [...this.state.todos];
      newTodo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });

      this.setState ({
        todos: newTodo
      });
    };

    handleChanges = e => {
      this.setState({
        inputText: e.target.value
      });      
    };

  render() {
    console.log(this.state.todos.map(e => e.completed));
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList 
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm 
        inputText={this.state.inputText}
        handleChanges={this.handleChanges}
        addTask={this.addTask}
        />        
      </div>
    );
  }
}

export default App;
