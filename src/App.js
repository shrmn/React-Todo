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

    toggleCompleted = itemId => {
      this.setState({
        todos: this.state.todos.map(item => {
          if (itemId === item.id) {
            return {
              ...item,
              completed: !item.completed
          };
          }
          return item;
        })
      });
    };

    clearCompleted = e => {
      e.preventDefault();
      this.setState({
        todos: this.state.todos.filter(item => !item.completed)
      });
    };

    handleChanges = e => {
      this.setState({
        inputText: e.target.value
      });      
    };

  render() {  
    return (
      <React.Fragment>
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
          clearCompleted={this.clearCompleted}
          />        
        </div>
        {/* <pre>this.state = {JSON.stringify(this.state, null, 2)}</pre> */}
      </React.Fragment>
    );
  }
}

export default App;
