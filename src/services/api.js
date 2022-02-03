import axios from "axios";

export const key = '5156081c405eb9afd701d0050e6ed855a00420a9';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': 'Bearer ' + key
    }
});

export default api;