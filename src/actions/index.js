

import { stemTextApi } from './../utils/apis/StemApi'
import { STEMMING_TEXT } from './ActionTypes';

export const stemmingText = (text) => {
    const response = stemTextApi(text)
    return {
     type: STEMMING_TEXT,
     payload : response
    }
}
