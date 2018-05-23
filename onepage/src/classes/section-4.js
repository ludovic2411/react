import React from 'react';
import pic_grid_1 from './pic02.jpg';
import pic_grid_2 from './pic03.jpg';
import pic_grid_3 from './pic04.jpg';

export default class Section_4 extends React.Component{
  render(){
    let text_title="Magna feugiat lorem";
    let text_content="Adipiscing a commodo ante nunc magna lorem et interdum mi ante"
    +"nunc lobortis non amet vis sed volutpat et nascetur.";
    let elements_grid=[{picture:pic_grid_1,classe:"left",key_title:text_title,key_content:text_content},{picture:pic_grid_2,classe:"center",key_title:text_title,key_content:text_content},{picture:pic_grid_3,classe:"right",key_title:text_title,key_content:text_content}];
    let elements_grid_list=elements_grid.map(function(element_grid){
      return <div className={element_grid.classe}>
              <img src={element_grid.picture} alt="pic"></img>
              <h3>{element_grid.key_title}</h3>
              <p>{element_grid.key_content}</p>
              <button className="button">More</button>
              </div>
  });
      return <section className="Section-4">
      <h2>Adipiscing amet consequat</h2>
      <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
      <hr></hr>
      <div className="Section-4-grid">
      {elements_grid_list}
      </div>
      </section>
  }
}
