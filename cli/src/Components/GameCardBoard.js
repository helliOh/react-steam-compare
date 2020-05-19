import axios from 'axios';
import qs from 'qs';

import React, {useState, useEffect} from 'react';

import GameCard from './GameCard'

export default function CardBoard({onUpdateScroll, scrollNeedUpdate}) {
    const [Count, setCount] = useState(0);
    const [Games, setGames] = useState([]);

    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    
    const [Page, setPage] = useState(1);

    useEffect(() =>{
      if(Loading) return;
      if(Count <= Games.length) return;//(부정확한 Count 값) 백앤드 에러로 마지막 페이지 이후 계속 요청 합니다.
      // console.log(`scroll listen, scroll ${scrollNeedUpdate}`);

      if(scrollNeedUpdate){
        // console.log(`${Page} Page of ${Count} Games`);
        // console.log(Games.length, '/', Count)
        setPage(Page + 1);
      }
    }, [scrollNeedUpdate]);

    useEffect(() => {
      if(Count && Count <= Games.length) return;//(부정확한 Count 값) 백앤드 에러로 마지막 페이지 이후 계속 요청 합니다.
      setLoading(true);

      axios.get(`http://localhost:3000/api/games/owners${qs.stringify({page : Page}, { addQueryPrefix: true })}`)
        .then(response => {
          setLoading(false);
          // console.log(response.data);
          setCount(response.data.count)
          setGames([...Games, ...response.data.rows]);
          onUpdateScroll();
        })
        .catch(error => {
          setError(error);
          setLoading(false);
          onUpdateScroll();
        })
    }, [Page]);

    return (
      <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
      <div style={{borderBottom : '1px #333 solid'}}> {Error? 'Error!' :  <h3> Total { Count } Games </h3>} </div>
      {Games && Games.map((game, i) => <GameCard {...game} key={game.id * 17 + i*19}/>)}
      </div> 
    );
}
