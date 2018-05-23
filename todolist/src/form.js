import React from 'react';

export default class Form extends React.Component{
  AddTodo(event){
    event.preventDefault();
   const txt = this.ToDoTitle.value;
   this.props.onNewTodo({
       title: txt,
       done: false,
       createdAt: new Date()
})}

  inputs(){
    return <div>
    <input type="text" ref={(input) => this.ToDoTitle = input}/>
          <button onClick={this.AddTodo.bind(this)} >Ajouter</button>
          </div>
  }
  render(){
    return(<form>
      {this.inputs()}
      </form>
    );
  }
}
