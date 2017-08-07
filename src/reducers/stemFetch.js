const initState = {
    fetching : false,
    fetched : false,
    error: null,
    resultStem: {}
}
const stemFetch = (state=initState, action) => {
     switch (action.type) {
       case "STEMMING_TEXT_PENDING":{
            return {
            ...state,
             fetching: true
             }
       }
       case "STEMMING_TEXT_REJECTED":{
            return {
            ...state,
             fetching: true,
             error: action.payload
             }
       }
       case "STEMMING_TEXT_FULFILLED":{
            return {
            ...state,
             fetching: false,
             fetched: true,
             resultStem: action.payload
             }
       }

       default:{
            return state;
       }
     }

}

export default stemFetch
