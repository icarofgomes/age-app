import axios from 'axios';
import React, { Component } from 'react';
import { API_URL } from '../../api';
import './form.css';

class Form extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            birth: '',
        };
    }

    handleChange({ target }) {
        const { name } = target;
        this.setState({
            [name]: target.value,
        });
    }

    handleSubmit() {;
        const data = {
            username: this.state.name,
            birth: this.state.birth,
        }
        axios.post(`${API_URL}/users`, data);
    }

    render() {
        return(
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="">
                    <span>Nome</span>
                    <input
                        type="text"
                        value={ this.state.name }
                        onChange={ this.handleChange }
                        name="name"
                        required
                        maxLength={20}
                        className="simpleInput"
                    />
                </label>
                <label htmlFor="">
                    <span>Data de nascimento</span>
                    <input
                        type="date"
                        value={ this.state.birth }
                        onChange={ this.handleChange }
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
}

export default Form;
