const appState = []
const AppStems = (state=appState, action) => {
        switch (action.type){
          case "STEMMING_TEXT_FULFILLED":{
            return [
             action.payload.data
            ]
          }
          default:{
           return state;
         }
        }

}
export default AppStems
