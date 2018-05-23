import React, { Component } from 'react';
import Hello from './hello';

export default class Welcome extends Component {
  render() {
    return (
      <div className="App">
      Hello
        <Hello parametre={"Hello World"}/>
      </div>
    );
  }
}
