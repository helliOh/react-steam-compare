import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card'

export default function CardBoard(props) {
    const [Games, setGames] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setGames(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/games/distinct');
            setGames(response.data);
          } catch (e) {
            setError(e);
          }
          setLoading(false);
          console.log('Fetching');
        };
    
        fetchGames();
      }, []);

    return (
        <div style={{ width: '100%', height: 'auto', background: '#121212', color: '#fff', 'boxSizing' : 'border-box', 'padding': '10px 30px', 'border' : '1px #121212 solid', 'float' : 'right'}}>
            <div style={{height: '50px', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid'}}>
                Board header
            </div>
            <div style={{display: 'inline-block', height : '100%', float : 'left', 'boxSizing' : 'border-box', 'padding': '10px 10px', 'border' : '1px #333 solid'}}>
                Board DashBoard
            </div>
            <div style={{display: 'inline-block', float : 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px'}}>
                { Games && Games.map( game => <Card {...game} />) }
            </div>

            
        </div>
    );
}
