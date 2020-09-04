import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Friend from '../friend/Friend';



const Home = () => {
    const [friends, setFriends] = useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(info => setFriends(info))
    }, []);

    return (
        <div>
  <h2>friends: {friends.length}</h2>
  {friends.map(friends =><Friend friends={friends}></Friend>)}
  
        </div>
    );
};

export default Home;