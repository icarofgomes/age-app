import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';

function UserList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Passou aqui!')
        axios.get(`${API_URL}/users`)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((response) => {
            console.log(response)
        })
    }, [])

    return(
        <div>
            { posts.map((post, key) => {
                return (
                    <div>
                        Nome: { post.username}
                        Idade: { post.age}
                    </div>
                )
            })}
        </div>
    )
}

export default UserList;