import React from "react";
import RegisterView from "../view/registerView";
import UserUrl from "../../utils/api";
import Request from "../../utils/request";

export default class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            newname: "",
            newpwd: "",
            confirmpwd: ""
        }
    }

    handleEmail = e => this.setState({email: e.target.value});
    handleNewName = e => this.setState({newname: e.target.value});
    handleNewPwd = e => this.setState({newpwd: e.target.value});
    handleConfirm = e => this.setState({confirmpwd: e.target.value});
    handleSubmit = e => {
        Request(UserUrl.register, "POST", this.state)
            .then(res => {
                console.log("注册成功！", res);
            }, rej => {
                console.log("注册失败！", rej);
            }).catch(err => {
                console.log("注册错误！", err)
            })
    }
    render(){
        return(
            <RegisterView 
                email={this.state.email}
                newname={this.state.newname}
                newpwd={this.state.newpwd}
                confirmpwd={this.state.confirmpwd}
                handleEmail={this.handleEmail}
                handleNewName={this.handleNewName}
                handleNewPwd={this.handleNewPwd}
                handleConfirm={this.handleConfirm}
                handleSubmit={this.handleSubmit}/>
        )
    }
}