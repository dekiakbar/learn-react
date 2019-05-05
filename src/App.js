import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/sass/style.scss';
import Navbar from './components/Navbar';
import Clock from './components/Clock';
import Hello from './components/Hello';
import State from './components/State';
import Event from './components/Event';
import Json from './components/Json';
import JsonGit from './components/JsonGit';
import Todo from './components/Todo';
import {Route,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/clock" component={Clock}/>
        <Route path="/hello" component={Hello}/>
        <Route path="/state" component={State}/>
        <Route path="/event" component={Event}/>
        <Route path="/json" component={Json}/>
        <Route path="/json-git" component={JsonGit}/>
        <Route path="/todo" component={Todo}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
