import React from 'react';
import List from './list';
import Form from './form';

export default class Main extends React.Component{
  render(){
    return(<section className="Liste">
            <Form  onNewTodo={this.onNewTodo}/>
            <List  />

          </section>
    )
  }
}
