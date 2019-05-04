import React from 'react';
import 'bootstrap/scss/bootstrap.scss';
import './assets/sass/style.scss';
import Navbar from './components/Navbar';
import Clock from './components/Clock';
import {Route,BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/clock" component={Clock}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
