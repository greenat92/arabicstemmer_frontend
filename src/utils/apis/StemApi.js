import axios from 'axios';

export const  stemTextApi = (text) => {
    const request = axios({
    method: 'post',
    data: {text: text},
    dataType: 'jsonp',
    baseURL: 'https://floating-wildwood-94447.herokuapp.com/text/',
    crossDomain : true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    })
    return request;
}
