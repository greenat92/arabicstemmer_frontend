import React from 'react'

const Stats = ({words, stemsNbr, ratio}) => {
    return(

          <span id="stats">
                <span className="label label-primary"  >words: {words}</span>
                {' '}<span className="label label-primary"  >stems: {stemsNbr}</span>
                {' '}<span className="label label-primary"  >ratio: {ratio}</span>
          </span>

)
}
export default Stats
