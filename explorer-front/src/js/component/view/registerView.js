import PropTypes from 'prop-types';

const RegisterView = (email, newname, newpwd, confirmpwd, handleEmail, handleNewName, handleNewPwd, handleConfirm, handleSubmit) => (
    <form id="register" onSubmit={handleSubmit}>
        <label for="email">邮箱</label>
        <input type = "text" id = "email" required
            value = {email}
            onChange = {handleEmail}/>

        <label for="newname">用户名</label>
        <input type = "text" id = "newname" required
            value = {newname}
            onChange = {handleNewName}/>

        <label for="newpwd">密码</label>
        <input type = "password" id = "newpwd" required
            value = {newpwd}
            onChange = {handleNewPwd}/>

        <label for="confirmpwd">邮箱</label>
        <input type = "password" id = "confirmpwd" required
            value = {confirmpwd}
            onChange = {handleConfirm}/>

        <button>注册</button>
    </form>
)

RegisterView.PropTypes = {
    email: PropTypes.string.isRequired,
    newname: PropTypes.string.isRequired,
    newpwd: PropTypes.string.isRequired,
    confirmpwd: PropTypes.string.isRequired,
    handleEmail: PropTypes.func.isRequired,
    handleNewName: PropTypes.func.isRequired,
    handleNewPwd: PropTypes.func.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default RegisterView;