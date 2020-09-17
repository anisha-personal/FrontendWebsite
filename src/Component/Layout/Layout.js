import React from 'react';
import Header from '../UI/Header/Header'
import Footer from '../UI/Footer/Footer'
const layout = (props) => (
  <section>
    <Header/>
    <div>{props.children}</div>
    <Footer/>
  </section>
);

export default layout;