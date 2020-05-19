import axios from 'axios';
import qs from 'qs';

import React, {useEffect, useReducer} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import AllGameCard from './AllGameCard';

const initialState = {
  loading : true,
  error : null,
  Filter : {
    search: '',
    page : 1,
    order : {name : 'positive', type : 'desc'}
  },
  count : 0,
  Games : null
}

function reducer(state, action) {// action.type 에 따라 다른 작업 수행
  switch (action.type) {
    case 'SEARCH_UPDATE' :
    return {
      ...state,
      Filter : action.payload,
      Games : state.Games
    };
    case 'PAGE_UPDATE' :
    return {
      ...state,
      Filter : action.payload,
      Games : state.Games
    };
    case 'FETCH_SUCCESS' :
    return {
      ...state,
      loading : false,
      error : null,
      Filter : state.Filter,
      Games : action.payload.rows,
      count : action.payload.count
    };
    case 'FETCH_FAILED':
    return {
      ...state,
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
    const {Filter, Games, count, loading, error} = state;

    useEffect(() => {//Life cycle
      axios.get(`http://localhost:3000/api/games${qs.stringify(Filter, { addQueryPrefix: true })}`)
      .then(response => dispatch({type : 'FETCH_SUCCESS', payload : response.data}))
      .catch(error => dispatch({type : 'FETCH_FAILED', error : error}))

      return () =>{}
    }, [Filter]);

    /* 
      useEffect(fn, arr)

      arr : [...triggers]
      [] 일 경우 one time only, null || undefined 의 경우 always
    */
    return (
      <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
        <div style={{borderBottom : '1px #333 solid', paddingLeft: '10px', paddingBottom: '10px'}}>
          <div style={{display : 'flex', width: '100%', justifyContent: 'space-between'}}>
            <div style={{display : 'flex', flexDirection: 'row', width : '30vw'}}>
              <div style={{display : 'flex', flexDirection: 'column', width: '1em', marginRight: '.5em'}}>
                <FontAwesomeIcon style={{width: '1em', height: '1em', marginTop: '.25em', marginRight : '.5em', color : 'rgb(115, 115, 115)'}} icon={faSearch} />
              </div>
              <div style={{display : 'flex', flexDirection: 'column', width: '40%'}}>
                <input 
                  style={{width : '100%', height: '2em', borderRadius: '4px', padding: '1px 8px', color : '#ddd', border: '1px rgb(51, 51, 51) solid', backgroundColor : 'rgb(18, 18, 18)'}}
                  type="search" 
                  placeholder="search..." 
                  value={Filter.search} 
                  onChange={(e) => {
                    dispatch({
                      type : 'SEARCH_UPDATE',
                      payload : { ...Filter, page: 1, search : e.target.value}
                    });
                  }} />
              </div>
              <div style={{display : 'flex', flexDirection: 'row', width: '40%', marginLeft: '1em', fontSize: '.9em', letterSpacing: '-.05em'}}>
                <span>{`${(Filter.page - 1) * 100 + 1} - ${(Filter.page-1) * 100 + 100} / `}</span> 
                <span style={{marginLeft: '.3em', color: 'rgba(75, 192, 192, .75)'}}>{`${count}`}</span>
              </div>
            </div>        
            <div style={{display : 'flex', flexDirection: 'row', width: '5vw'}}>
              <div style={{display : 'flex', flexDirection: 'column', width: '50%'}}>
                <button
                    style={{width : '100%', height: '2em', borderRadius: '4px 0px 0px 4px', padding: '1px 8px', color : '#ddd', border: '1px rgb(51, 51, 51) solid', backgroundColor : 'rgb(18, 18, 18)'}}
                    onClick={(e) => {
                      if(Filter.page < 2) return alert('No previous page');
                      dispatch({
                        type : 'PAGE_UPDATE',
                        payload : {...Filter, page : Filter.page - 1}
                      });
                    }}> <FontAwesomeIcon style={{width: '1em', height: '1em', color : 'rgb(115, 115, 115)'}} icon={faArrowLeft} /> </button>
              </div>
              <div style={{display : 'flex', flexDirection: 'column', width: '50%'}}>
                <button
                  style={{width : '100%', height: '2em', borderRadius: '0px 4px 4px 0px', padding: '1px 8px', color : '#ddd', border: '1px rgb(51, 51, 51) solid', backgroundColor : 'rgb(18, 18, 18)', marginLeft: '-1px'}}
                  onClick={(e) => {
                    if(count < Filter.page * 100) return alert('No next page');
                    dispatch({
                      type : 'PAGE_UPDATE',
                      payload : {...Filter, page : Filter.page + 1}
                    });
                  }}> <FontAwesomeIcon style={{width: '1em', height: '1em', color : 'rgb(115, 115, 115)'}} icon={faArrowRight} /> </button>
              </div>
            </div>
          </div>
            
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
