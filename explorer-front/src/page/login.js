

class Login extends React.Component {
    render() {
        return (
            <form class="login-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" class="u-full-width"></input>
                <label for="password">password</label>
                <input type="password" id="password" name="password" class="u-full-width"></input>
                <button class="button-primary">login</button>
            </form>
        )
    }
}