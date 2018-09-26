import React  from 'react';
import './login.css';
import {userUrl} from '../utils/api';
import request from '../utils/request';

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
        // if(localStorage.getItem('token')) this.goHome();
    }

    componentWillUnmount() {

    }

    handleChange(e) {
        this.setState({userName: e.target.value});
    }

    handlechange2(e) {
        this.setState({password: e.target.value});
    }

    goHome(){
        this.props.history.push('/'); 
    }

    handleSubmit(e){
        e.preventDefault();
        request(userUrl.login, "POST", this.state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.goHome();
        },  rej => {
            console.log("rej", rej)
        }).catch(e => {
            console.log("e", e)
        })
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