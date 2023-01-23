import React,{useState} from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {Cta, Brand, Navbar,Loading} from './components';
import './App.css';


const App = () => {
  const [loading, setLoading]= useState(true);

  console.log("rendered!");

  if(loading){
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    return <Loading />;
  }
  return (
    <div className="App">
        <div className="gradient__bg">
        <Navbar />
        <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App