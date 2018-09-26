import React from 'react';
import './header.css'
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
                <div>
                    
                </div>
                <span>Exporer</span>
                <div>
                    {this.state.isLogin? <a>你好</a>:<a>请登录</a>}
                </div>
            </header>
        )
    }
}
export default HEADER;