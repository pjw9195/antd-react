import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import MainContainer from "./containers/MainContainer"
import BoardContainer from "./containers/BoardContainer"
import ProfileContainer from "./containers/ProfileContainer"
import RankingContainer from "./containers/RankingContainer"

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
      <Switch>
        <Route exact path='/' component={MainContainer}/>
        <Route exact path='/board' component={BoardContainer}/>
        <Route exact path='/profile' component={ProfileContainer}/>
        <Route exact path='/ranking' component={RankingContainer}/>

      </Switch>
  );
}

export default App;
