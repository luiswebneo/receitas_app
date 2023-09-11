import axios from "axios";

/*
    Rodar com IPV$: json-server --watch -d 180 --host 192.168.5.125 db.json

*/

const api = axios.create({
    baseURL: 'http://192.168.5.125:3000'
})

export default api;