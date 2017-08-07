import axios from 'axios'

export const STEMMING_TEXT = "STEMMING_TEXT";
export const stemmingText = (text) => {
    const request = axios({
    method: 'post',
    data: {text: text},
    baseURL: 'https://floating-wildwood-94447.herokuapp.com/text/',
    headers: {'Access-Control-Allow-Origin': '*'},

    })
    return {
     type: STEMMING_TEXT,
     payload : request
    }
}
