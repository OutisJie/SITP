import React from 'react';
import './header.css'
import {NavLink} from 'react-router-dom';

class HEADER extends React.Component{
    constructor(props){
        super();
        this.state = {
            isLogin: false
        }
    }

    render(){
        return(
            <header>
                <span>Exporer</span>
                <NavLink exact to="/login" activeClassName="active-link">Login</NavLink>
                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                <div>
                    {this.state.isLogin? <a>你好</a>:<a>请登录</a>}
                </div>
            </header>
        )
    }
}
export default HEADER;