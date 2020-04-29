import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import MetaUserCard from './MetaUserCard';

export default function CardBoard(props) {
    const [Users, setUsers] = useState(null);
    const [Loading, setLoading] = useState(false);
    const [Error, setError] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
          try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/users/library');
            setUsers(response.data);
          } catch (e) {
            setError(e);
          }
          setLoading(false);
        };
    
        fetchGames();
      }, []);

    return (
      <div style={{ width: '80vw', display: 'inline-block', float: 'right', 'boxSizing' : 'border-box', 'border' : '1px #333 solid', 'padding': '10px 10px', background: '#121212', 'border' : '1px #333 solid', 'borderRadius' : '10px', 'boxShadow' : '2px 4px 4px 4px rgba(0, 0, 0, 0.8)'}}>
      <div style={{borderBottom : '1px #333 solid'}}> <h3> Total { Users && Users.length } Users </h3></div>
      {Users && <MetaUserCard Users={Users} />}
      {Users && Users.map(user => <UserCard {...user} key={user.id} />)}
      </div> 
    );
}
