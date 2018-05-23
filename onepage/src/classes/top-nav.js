import React from 'react';

export default class Top_nav extends React.Component{
  render(){
    return(<section className="Top_nav">
    <section className="nav_left">
      <h3>Photon</h3>
      <ul>

        <li>Desktop</li>
        <li>Tablet</li>
        <li>Table(Portrait)</li>
        <li>Mobile</li>
        <li><i className="fab fa-facebook-f"></i></li>
        <li><i className="fab fa-twitter"></i></li>
        <li><i className="fab fa-google-plus-g"></i></li>
        
      </ul>
      </section>
      <section className="nav_right">
      <ul>

        </ul>
      </section>
    </section>
    );
  }
}
