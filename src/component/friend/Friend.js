import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friends;
    const history = useHistory();
    const applyClick = (something) =>{
        const api = `/details/${something}`
        history.push(api);
    }
    const styleFriend = {
        border: '1px solid blue',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={styleFriend}>
            <h3>{name}</h3>
            <h4>Id: {id}</h4>
            <h5>{email}</h5>
            <Link to={`/details/${id}`} ><button>Click for details for {id}</button></Link>
            <br/>
            <button onClick={() =>applyClick(id)}>Click me!!!</button>
        </div>
    );
};

export default Friend;