export const helpFetch = ()=>{
    const baseUrl = 'http://localhost:4000/';
    const customFetch = async(endpoint, options = {})=>{
        options.method = options.method || 'GET';
        options.headers = {
            'content-type': 'application/json'
        };
        options.mode = 'cors';
        options.credentials = 'include';
        if(options.body){
            options.body = JSON.stringify(options.body);
        }
        const res = await fetch(`${baseUrl}${endpoint}`, options);
        const env = await res.json();
        return env;
    }
    const get = (endpoint, options)=>customFetch(endpoint, options);

    const post = (endpoint, options)=>customFetch(endpoint, options);

    return {get, post}
}