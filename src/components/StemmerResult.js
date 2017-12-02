import React from 'react'

import Stem from './Stem'
import Stats from './Stats'

const StemmerResult = ({results}) => {
     var stems = [];

     results.map(r => r.map((t) => {
         if(!(t.stem in stems)){
             stems[t.stem]=[t.word];
         }else if (stems[t.stem].indexOf(t.word) === -1){
             stems[t.stem].push(t.word);
         }
         }
         )
     )

     if(!results.length){


        return(
         <div>

         </div>
         )

     }
     return (
          <div className="well centered">
                 <div>
                   <span className="label label-default">Stats</span>
`                     {' '}
                     <Stats
                      words={results.map(k => k.length)}
                      stemsNbr={Object.keys(stems).length }
                      ratio={(Math.round(Object.keys(stems).length*100.0/results.map(k => k.length))/100.0).toFixed(2)}
                   />
                 </div>
                <br/>
                <ul id="result">
                          {
                              Object.keys(stems).map( (entry, index) => (
                              <Stem
                                 key={index}
                                 stemValue={entry}
                                 wordValue={stems[entry].join(' | ')}
                              />
                              )
                            )
                          }
               </ul>
         </div>
     )
}
export default StemmerResult
