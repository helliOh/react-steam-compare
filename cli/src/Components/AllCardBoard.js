import React, {useState, useEffect, useReducer} from 'react';
import AllGameCard from './AllGameCard';
import axios from 'axios';
import qs from 'qs';

const initialState = {
  loading : true,
  error : null,
  Filter : {
    search: '',
    page : 1,
    order : {name : 'positive', type : 'desc'}
  },
  Games : null
}

function reducer(state, action) {// action.type 에 따라 다른 작업 수행
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
    const {Filter, Games, loading, error} = state;

    useEffect(() => {//Life cycle
      //console.log('useEffect, trigger = filter');
      
      axios.get(`http://localhost:3000/api/games${qs.stringify(Filter, { addQueryPrefix: true })}`)
      .then(response => dispatch({type : 'FETCH_SUCCESS', payload : response.data}))
      .catch(error => dispatch({type : 'FETCH_FAILED', error : error}))

      return () =>{console.log("cleanup");}
    }, [Filter]);
    /* 
      useEffect(fn, arr)

      arr : [...triggers]
      [] 일 경우 one time only, null || undefined 의 경우 always
    */
    return (
      <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
        <div style={{borderBottom : '1px #333 solid', paddingLeft: '10px', paddingBottom: '10px'}}>
          <input 
          style={{width : '20%', height: '2em', borderRadius: '4px', padding: '1px 8px', marginRight : '2em', color : '#ddd', border: '1px rgb(51, 51, 51) solid', backgroundColor : 'rgb(18, 18, 18)'}}
          type="search" 
          placeholder="search..." 
          value={Filter.search} 
          onChange={(e) => {
            console.log('filter update');
            dispatch({
              type : 'FILTER_UPDATE',
              payload : {...Filter, search : e.target.value}
            });
          }} />
          {(loading && <div style={{display : 'inline-block', color : 'rgba(75, 192, 192, 1)'}}> Loading... </div>) || (error && <div style={{display : 'inline-block', color : 'rgba(255, 99, 132, 1)'}}> Error... </div>)}
        </div>
        <div style={{width : '100%', padding: '4px'}}>
        {Games && Games.map(game => 
          <AllGameCard {...game} key={game.id * 19 * 23}/>
        )}
        </div>
      </div>
    );
}
