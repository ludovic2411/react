import React from 'react';

export default class List extends React.Component{
  toggleTodo(todoDone, index){
  this.props.onTodoToggle(todoDone, index);
}
  showTodos(todos){
    return (
      todos.map((todo, index) => {
        return (
          <div key={index} className="todo " >
          <p>{todo.title}{todo.done ? ' true': ' false '}</p>
          <button onClick= {()=> this.toggleTodo(todo,index)}>Done!</button>
          </div>
        )}
    ))
  }

  test(){
    return <p>It works !</p>
  }

  render(){
    return(
      <div className="Liste">
        {this.props.todos}
        {this.showTodos(this.props.todos)}
        {this.test()}
      </div>
    );
  }
}
