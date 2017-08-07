import React from 'react'

const Stem = ({
index,
stemValue,
wordValue

}) => (
  <span key={index} className="text-success" data-toggle='tooltip'  data-placement='bottom'  title={wordValue}>

    {" "+stemValue+" "}
  </span>
)

export default Stem
