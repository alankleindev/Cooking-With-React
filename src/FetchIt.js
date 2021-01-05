import React, { useState, useEffect } from 'react';
import axios from 'axios';



function FetchIt({hooker}) {

    console.log(hooker);
    let [state, setState] = useState([]);

    useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        setState(response.data);
        });
    }, [])

    return (
        <div>
            { state.map(post => {
                return <li key={post["id"].toString()} memow="pickle">Title: {post.title}</li>
            })}
        </div>
    );
}

export default FetchIt;