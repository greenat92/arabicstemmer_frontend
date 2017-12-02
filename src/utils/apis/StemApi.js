import axios from 'axios';

import { BASE_URL } from './BaseUrl'

const URL_STEM_TEXT_API = `${BASE_URL}/text/`

export const  stemTextApi = (text) => {
    const request = axios({
    method: 'post',
    data: {text: text},
    dataType: 'jsonp',
    baseURL: URL_STEM_TEXT_API,
    crossDomain : true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    })
    return request;
}
