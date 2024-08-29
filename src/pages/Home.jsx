// App.js
import React from 'react';


import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Hover () {
  return (
    <>
      <div><Header/></div>
      <div className=' '><MainContent/></div>
      <div><Footer/></div>
     
      </>
  );
}

export default Hover;
