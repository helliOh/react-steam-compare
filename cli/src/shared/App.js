import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { GameView, UserView, AllGameView } from '../Pages'

export default function App() {
  return (
    <div>
      <Route exact path="/" component={GameView}/>
      <Route path="/userview" component={UserView}/>
      <Route path="/allview" component={AllGameView}/>
    </div>
  );
}


