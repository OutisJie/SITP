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

    }

    componentWillUnmount() {

    }

    handleChange(e) {
        this.setState({userName: e.target.value});
    }

    handlechange2(e) {
        this.setState({password: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        console.log("url", userUrl.login)
        console.log("value", this.state)

        request(userUrl.login, "POST", this.state)
        .then(res => {
            console.log("res", res)
        },  rej => {
            console.log("rej", rej)
        }).catch(e => {
            console.log("e", e)
        })

        request(userUrl.test, "GET")
        .then(res => {
            console.log("res", res)
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