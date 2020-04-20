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
            const response = await axios.get('http://localhost:3000/api/games/owners');
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
        Games && Games.map( game => <Card {...game} />) 
    );
}
