
import { stemTextApi } from './../utils/apis/StemApi'

export const STEMMING_TEXT = "STEMMING_TEXT";

export const stemmingText = (text) => {
    const request = stemTextApi(text)
    return {
     type: STEMMING_TEXT,
     payload : request
    }
}
