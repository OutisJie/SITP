import React, { Component } from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            password : "",
        }

        //binding is necessary unless you use arrow function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleChange(e) {
        this.setState({userName: e.target.userName});
    }

    handlechange2(e) {
        this.setState({password: e.target.password});
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("value", this.state)
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="u-full-width" value={this.state.userName} onChange={this.handleChange}></input>
                <label htmlFor="password">password</label>
                <input type="password" id="password" className="u-full-width" value={this.state.password} onChange={(e) => this.handlechange2(e)}></input>
                <button className="button-primary">login</button>
            </form>
        )
    }
}
export default Login;