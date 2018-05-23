import React from 'react';

 export default class Form extends React.Component {
   constructor(props) {
     super(props);
     this.state ={click:2} ;
   }
   test(test){
     console.log(test)
   }
   render() {
    let click = this.state.click;
    return (
      <div>
        <button onClick={this.test.bind(this, 'params')}>test</button>
        <button onClick={() => this.setState({click: click+1 })}>ajouter</button>
        <button onClick={() => this.setState({click: click-1})}>diminuer</button>
       <input type="text" value={click} ></input>
      </div>
    );
  }
}
