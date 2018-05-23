import React from 'react';
import Section_1 from'./classes/section-1.js';
import Section_2 from "./classes/section-2.js";
import Top_nav from './classes/top-nav.js';
import Section_3 from './classes/section-3.js';
import Section_4 from './classes/section-4.js';
import Section_5 from './classes/section-5.js';
import Section_6 from './classes/section-6.js';

 export default class Main extends React.Component{
  render(){
    return( <section className="wrapper">
    <Top_nav />
    <Section_1 />
    <Section_2 />
    <Section_3 />
    <Section_4 />
    <Section_5 />
    <Section_6 />
    </section>
  );
  }
}
