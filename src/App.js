import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainContainer from "./containers/MainContainer"
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={MainContainer}/>
      </Switch>
  );
}

export default App;
