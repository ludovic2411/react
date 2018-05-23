import React from 'react';

export default class Section_6 extends React.Component{
  render(){
    let social_array=["fab fa-twitte","fab fa-facebook-f","fab fa-instagram","fab fa-github","fas fa-envelope"];
    let credits_array=["Untitled","Design:HTML5UP","Demo Images:Unsplash"];
    let credits_list=credits_array.map(function(element){
      return <li>{element}</li>
    })
    let social_list=social_array.map(function(element){
      return <i className={element}></i>
    })
    return <section className="Section-6">
            <p>{social_list}</p>
            <ul>{credits_list}</ul>
            </section>
  }
}
