import React from 'react';
import List from './list.js';
import Form from './form.js';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}

todoToggleState(todo, index){
  let _todo = todo;
    _todo.done = ! todo.done;
    let newTodos =  this.state.todos;
    newTodos[index] = _todo;
    this.setState({todos: newTodos})
}

onNewTodo(todo){
    let newTodoList = this.state.todos;
    newTodoList.push(todo);
    this.setState({ todos: newTodoList });
}
  render(){
    let bonjour = "bonjour";
    return (<section className="app">
            <header>
            <h1>{bonjour}</h1>
            </header>
            <p>Edit new tasks</p>
            <Form onNewTodo={this.onNewTodo.bind(this)} />
            <List todos={this.state.todos} onTodoToggle={this.todoToggleState.bind(this)}/>
            </section>
    )
  }
}
