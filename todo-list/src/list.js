import React from 'react';
/*import Other from './other';*/
export default class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        todos:[]
    };
}
    onNewTodo(todo){
      let newTodoList = this.state.todos;
      newTodoList.push(todo);
      this.setState({ todos: newTodoList });
}
  render(){
    let name="bibou";
    return <div className={name}>
            {/*<Other />*/}

            </div>
  }
}
