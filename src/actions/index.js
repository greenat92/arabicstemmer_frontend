import axios from 'axios'

export const STEMMING_TEXT = "STEMMING_TEXT";
export const stemmingText = (text) => {
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
    return {
     type: STEMMING_TEXT,
     payload : request
    }
}
