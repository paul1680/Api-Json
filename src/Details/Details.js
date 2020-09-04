import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {fId} = useParams();
    const[detail, setDetail] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${fId}`;
        fetch(url)
        .then(res=>res.json())
        .then(info=>setDetail(info))
    },[])
    return (
        <div>
            Here is details of {fId}.
    <h3>{detail.name}</h3>
    <h4>{detail.username}</h4>
    
        </div>
    );
};

export default Details;