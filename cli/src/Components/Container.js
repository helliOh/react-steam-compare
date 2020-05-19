import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import { GameView, UserView, AllGameView } from '../Pages'

export default function Container({onScrollNeedUpdate}) {
  const THRESHOLD = 100;

  useEffect(() =>{ window.addEventListener('scroll', scrollHandler, true); }, [])

  function scrollHandler(){
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    
    if(scrollHeight - innerHeight - scrollTop < THRESHOLD){
      onScrollNeedUpdate();
    }
  }

  return (
    <div>
      <Route exact path="/" component={GameView}/>
      <Route exact path="/userview" component={UserView}/>
      <Route exact path="/allview" component={AllGameView}/>
    </div>
  );
}