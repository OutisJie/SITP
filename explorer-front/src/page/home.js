import React from 'react';
import './home.css';

class HOME extends React.Component {
    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token')
        }
    }

    componentWillMount(){
        if(!localStorage.getItem('token')){
            this.goLogin();
        }
    }

    componentWillUnmount(){
        // this.goLogin();
    }

    goLogin(){
       localStorage.clear();
       this.props.history.push('/login'); 
    }

    render() {
        return (
            <div className="Home">
                <h1 className="Home-intro">this is the home page.</h1>
            </div>
        )
    }
}

export default HOME