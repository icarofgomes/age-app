import axios from 'axios';
import React, { Component } from 'react';
import { API_URL } from '../api';

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
                    Digite o seu nome:
                    <input
                        type="text"
                        value={ this.state.name }
                        onChange={ this.handleChange }
                        name="name"
                        required
                    />
                </label>
                <label htmlFor="">
                    Digite a data de nascimento:
                    <input
                        type="date"
                        value={ this.state.birth }
                        onChange={ this.handleChange }
                        name="birth"
                    />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default Form;
