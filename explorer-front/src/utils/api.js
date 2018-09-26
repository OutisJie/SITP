class API{
    constructor() {
        this.HOST = 'https://easy-mock.com/mock/5baafb6e9f43b479fb7c854e/example';
        // this.HOST = 'http://127.0.0.1';
        // this.HOST = 'http://39.108.173.192';
    }
}

//api
class USERURL extends API{
    constructor(){
        super();
        this.login = this.HOST + '/user/login'
        this.register = this.HOST + '/user/register'
        this.getMyInfo = this.HOST + '/user/getmyinfo'
        this.updateMyIfo = this.HOST + '/user/updatemyinfo'

        this.test = this.HOST + '/test'
    }
}

export const userUrl = new USERURL();