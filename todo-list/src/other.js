import React from 'react';

export default class Other extends React.Component{
   test(){
    return <p>Ca marche</p>
  }
  render(){
    return <div>{this.test()}</div>
  }
}
