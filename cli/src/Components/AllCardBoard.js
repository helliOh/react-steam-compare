import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import qs from 'qs';

const initialState = {
  loading : true,
  error : null,
  Filter : {
    search: '',
    page : 1,
    order : {name : 'createdAt', type : 'desc'}
  },
  Games : null
}

function reducer(state, action) {// action.type 에 따라 다른 작업 수행
  console.log(`REDUCER :: dispatching ${action.type}`)
  switch (action.type) {
    case 'FILTER_UPDATE' :
    return {
      loading : true,
      error : null,
      Filter : action.payload,
      Games : state.Games
    };
    case 'FETCH_SUCCESS' :
    return {
      loading : false,
      error : null,
      Filter : state.Filter,
      Games : action.payload
    };
    case 'FETCH_FAILED':
    return {
      loading : false,
      error : action.error,
      Filter : state.Filter,
      Games : state.Games
    };
    default:
    return state;
  }
}

export default function CardBoard(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {Filter, Games} = state;

    useEffect(() => {//Life cycle
      console.log('useEffectCalled');
      
      axios.get(`http://localhost:3000/api/games${qs.stringify(Filter, { addQueryPrefix: true })}`)
      .then(response => dispatch({type : 'FETCH_SUCCESS', payload : response.data}))
      .catch(error => dispatch({type : 'FETCH_FAILED', error : error}))

      return () =>{
        console.log("hi I'm cleanup");
      }
    }, [Filter]);
    /* 
      useEffect(fn, arr)

      arr : [...triggers]
      [] 일 경우 one time only, null || undefined 의 경우 always
    */
    return (
      <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
      <div style={{borderBottom : '1px #333 solid'}}>
        <input 
        type="search" 
        placeholder="search..." 
        value={Filter.search} 
        onChange={(e) => {
          dispatch({
            type : 'FILTER_UPDATE',
            payload : {...Filter, search : e.target.value}
          });
        }} />
      </div>
      {Games && Games.map(game => 
        <div style={{border : "1px red solid" }} key={game.id}>
          <h3> {game.name} </h3>
        </div>
      )}
      </div> 
    );
}
