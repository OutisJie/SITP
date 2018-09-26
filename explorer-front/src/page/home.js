import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';

class HOME extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="Home">
                <h1 className="Home-intro">this is the home page.</h1>
                <p><Link to="/home">Login</Link></p>
                <p><Link to="/">Home</Link></p>
            </div>
        )
    }
}

export default HOME