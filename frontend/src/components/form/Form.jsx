import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../api';
import './form.css';

function Form() {
    const [data, setData] = useState({
        username: '',
        birth: '',
    })

    const handleChange = ({ target: { value, name }}) => {
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        axios.post(`${API_URL}/users`, data);
    }

    return(
        <form onSubmit={ handleSubmit }>
            <label htmlFor="">
                <span>Nome</span>
                <input
                    type="text"
                    value={ data.username }
                    onChange={ handleChange }
                    name="username"
                    required
                    maxLength={20}
                    className="simpleInput"
                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
                />
            </label>
            <label htmlFor="">
                <span>Data de nascimento</span>
                <input
                    type="date"
                    value={ data.birth }
                    onChange={ handleChange }
                    name="birth"
                    className="simpleInput"
                />
            </label>
            <input
                type="submit"
                className='submitInput'
                value={"Enviar"}
            />
        </form>
    )
}

export default Form;
