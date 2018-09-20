import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Hello = () => <h2>Hello World from Training</h2>
const Image = (props) => {
  let { src1, title } = props;
  src1 = src1 || require('./pic_trulli.jpg');
  title = title || 'Default Picture';
  return(
    <img src={src1} alt={title} width="300" height="333" />
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Training</h1>
        </header>
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
    </p> */}
        <Hello/>
        <Image />
        <Image src1='https://www.w3schools.com/html/img_girl.jpg' title='girl' />
        <Image src1='https://www.w3schools.com/html/img_chania.jpg' title='chania' />

      </div>
    );
  }
}

export default App;
