import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { API_URL } from '../../api';
import CardBox from '../card-box/CardBox';
import './user-list.css';

function UserList() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${API_URL}/users`)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((_response) => {
            setError(true);
        })
    }, [])

    if (error) {
        return (
            <div className='warn'>
                <h1>ERRO</h1>
                <p>
                    Desculpe, estamos enfrentando instabilidade no servidor, volte mais tarde!
                </p>
            </div>
        )
    }

    if(users.length === 0) {
        return (
            <div className='warn'>
                <h1>ATENÇÃO</h1>
                <p>Nenhum nome cadastrado ainda, envie um nome e uma data de nascimento!</p>
            </div>
        )
    }

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