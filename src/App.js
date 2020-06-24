import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MenuBar from './components/AppBar/AppBar';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MenuBar} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
