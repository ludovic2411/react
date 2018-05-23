import React from 'react';
import pic01 from './pic01.jpg';

export default class Section_2 extends React.Component{
  render(){
    return(
      <section className="Section-2">
      <div className="section-2-left">
      <h2>Lorem ipsum dolor adipiscing
      amet dolor consequat</h2>
      <hr></hr>
      <p>Adipiscing a commodo ante nunc accumsan et interdum mi ante adipiscing. A nunc lobortis non nisl amet vis sed volutpat aclacus nascetur ac non.
      Lorem curae et ante amet sapien sed tempus adipiscing id accumsan.</p>
      </div>
      <div className="section-2-right">
      <img src={pic01} alt="pic"></img>
      </div>
      </section>
    );
  }
}
