import React from 'react';

export default class Form extends React.Component{
  AddTodo(event){
  event.preventDefault();
  const txt=this.ToDoTitle.value;
  console.log(txt);
}
  render(){
    return(
      <section className="form">
        <form>
        <input type="text" ref={(input) => this.ToDoTitle = input}/>
        <button onClick={this.AddTodo.bind(this)}>Ajouter</button>
        </form>
      </section>
    )
  }
}
