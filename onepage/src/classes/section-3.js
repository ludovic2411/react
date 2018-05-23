import React from 'react';

export default class Section_3 extends React.Component{
  render(){
    //let elements=['fas fa-code','fas fa-bolt','fas fa-camera-retro','fas fa-cog','fas fa-desktop','far fa-calendar-alt'];
    let elements=[{id:'li-1',key:'fas fa-code' },{id:'li-2',key:'fas fa-bolt'},{id:'li-3',key:'fas fa-camera-retro'},{id:'li-4',key:'fas fa-cog'},{id:'li-5',key:'fas fa-desktop'},{id:'li-6',key:'far fa-calendar-alt'}];
    let elements_list=elements.map(function(element){
      return <li><i className={element.key} id={element.id}></i></li>;
    })
    return   <section className="Section-3">
      <div className="section-3-left">
      <ul>{elements_list}</ul>
      </div>
      <div className='section-3-right'>
      <h2>Lorem ipsum dolor adipiscing
      amet dolor consequat</h2>
      <hr></hr>
      <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. a nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
      Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
      <p>Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo nunc phasellus cubilia ac risus accumsan. Accumsan blandit.
      Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis.
      Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae consequat feugiat etiam dolore.</p>
      <p>Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. a nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non.
      Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.</p>
      </div>
      </section>
  }
}
