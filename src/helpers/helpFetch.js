/* export const helpFetch = ()=>{
    const baseUrl = 'http://localhost:4000/';
    const customFetch = async(endpoint, options = {})=>{
        options.method = options.method || 'GET';
        options.headers = {
            'content-type': 'application/json'
        }
        if(options.body){
            options.body = JSON.stringify(options.body);
        }
        const res = await fetch(`${baseUrl}${endpoint}`, options);
        const env = await res.json();
        console.log(env)
        return env;
    }
    const get = (endpoint, options)=>customFetch(endpoint, options);

    const post = (endpoint, options)=>{
        customFetch(endpoint, options);}

    return {get, post}
} */
const baseUrl = 'http://localhost:4000/';
export const helpFetch = {
    get : (endpoint)=>{
        return fetch(`${baseUrl}${endpoint}`)
            .then(res=>res.json());
    },
    post : async(endpoint, options = {})=>{
        options.method = 'POST';
        options.headers = {
            'content-type': 'application/json'
        }
        if(options.body){
            options.body = JSON.stringify(options.body);
        }
        return fetch(`${baseUrl}${endpoint}`, options)
            .then(res=>res.json());
    }
}