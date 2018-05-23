import React from 'react';

export default class Section_5 extends React.Component{
  render(){
    let button_list=[{classe:"button_1",button_content:"Sign Up"},{classe:"button-2",button_content:"Learn More"}];
     let button_list_loop=button_list.map(function(element){
    return <button id={element.classe}>{element.button_content}</button>
  });
  return <section className="Section-5">
          <h2>Ipsum feugiat consequat?</h2>
          <hr></hr>
          <p>Sed lacus nascetur ac ante amet sapien.</p>
          <div className="buttons">
          {button_list_loop}
          </div>
         </section>
  }
}
