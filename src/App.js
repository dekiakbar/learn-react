import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/sass/style.scss';
import Navbar from './components/Navbar';
import Clock from './components/Clock';
import Hello from './components/Hello';
import State from './components/State';
import Event from './components/Event';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
