import React, { Component } from 'react';
import axios from 'axios';

class Signin extends Component {
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { value, name } = event.target;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(e){
        e.preventDefault();

        console.log('Form Submitted:', this.state);

        axios.post('http://localhost:9000/auth/signin', this.state).then(resp=>{
            console.log('Sign In Resp:', resp);
        }).catch(err=>{
            console.log('Sign In Error:', err.message);
        })
    }

    render() {

        const { email, password } = this.state;
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email:
                        <input onChange={this.handleChange} name='email' value={email} type="text"/>
                    </div>
                    <div>
                        Password:
                        <input onChange={this.handleChange} name='password' value={password} type="password"/>
                    </div>
                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}


export default Signin
