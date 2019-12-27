import React, { Component } from 'react';
import './signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SigninPage extends Component {

    state = {
        email: null,
        password: null,
        passMatch: null,
    }

    handleInputs = (e) => {
        let data = e.target;

        this.setState({
            [data.name]: data.value
        })
    }

    checkPassMatch = (e) => {
        let confirmPass = e.target.value;
        if (this.state.password === confirmPass) {
            this.setState({
                passMatch: true
            });
        } else {
            this.setState({
                passMatch: false
            })
        }
    }

    postSignup = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        
        axios.put('http://localhost:8080/new-user', {email, password})
        .then(() => {
                console.log("status 200");
                this.props.history.push("/home");
        })
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="signin">
                <h4>Please sign in</h4>
                <form className="form-group login">
                    <input className="form-control" 
                        name="email" 
                        type="email" 
                        placeholder="Enter Email" 
                        onChange={this.handleInputs}></input>
                    <input className="form-control" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handleInputs}></input>
                    
                    <button className="btn btn-light" onClick={this.postSignup}>Signup</button>
                    <Link to="/signup"><p>I don't have an account yet</p></Link>
                </form>

            </div>
        )
    }
}

export default SigninPage;