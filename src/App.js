import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/todos/todos';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="row">
          <div className="col-xs-6">
            <Todos store={store}></Todos>
          </div>
          <div className="col-xs-6">
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
