import React  from 'react';
import '../../css/login.css';
import {UserUrl} from '../utils/api';
import Request from '../utils/request';
import Register from "../component/model/registerModal";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: "Login",
            user: {
                userName : "",
                password : "",
            }
        }

        //binding is necessary unless you use arrow function
        this.handleChange = this.handleChange.bind(this);
        this.handlechange2 = this.handlechange2.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeView = this.changeView.bind(this);
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
        Request(UserUrl.login, "POST", this.state)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            this.goHome();
        },  rej => {
            console.log("rej", rej)
        }).catch(e => {
            console.log("e", e)
        })
    }

    changeView(){
        if(this.state.currentView === "Login")
            this.setState({currentView: "Register"})
        else if(this.state.currentView === "Register")
            this.setState({currentView: "Login"})
    }

    render() {
        return (
            <div>
                {
                    this.state.currentView === "Login" ? 
                        <form className="login-form" onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" className="u-full-width" value={this.state.userName} onChange={this.handleChange}></input>
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" className="u-full-width" value={this.state.password} onChange={(e) => this.handlechange2(e)}></input>
                            <button className="button-primary">login</button>
                        </form>
                        :
                        this.state.currentView === "Register" ? <Register/>:null
                }
                <div>
                    <span onClick={this.changeView}>{this.state.currentView === "Login" ? "注册": "登录"}</span>
                </div>
            </div>
        )
    }
}
export default Login;