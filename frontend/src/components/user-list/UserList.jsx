import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_URL } from '../../api';
import CardBox from '../card-box/CardBox';
import './user-list.css';

function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/users`)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((response) => {
            console.log(response)
        })
    }, [])

    return(
        <div>
            { users.map((user, i) => (
                    <CardBox key={ i } user = { user } />
                )
            )}
        </div>
    )
}

export default UserList;