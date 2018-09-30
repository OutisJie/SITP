class Request {
    constructor(url, method, params, type){
        this.url = url;
        this.method = method;
        this.params = JSON.stringify(params);

        //form or json
        this.initHeader = new Headers();
        this.initHeader.append('Accept', 'application/json, text/plain, */*');
        this.initHeader.append('Cache-Control', 'no-cache');
        this.initHeader.append('Content-Type', type === 'form' ? 'application/x-www-form-urlencoded': 'application/json;charset=UTF-8');
        
        this.init = {
            method: this.method,
            credentials: 'include', //cookies
            cache: 'no-cache',
            headers: this.initHeader,
            body: this.params
        }
    }

    send(){
        return fetch(this.url, this.init).then(res => res.json());
    }
}

export default (url, method, params, type) => {
    return new Request(url, method, params, type).send();
}