import React from "react";


const StemForm = ({
   value,
   onchange,
   fetchingStem,
   handleFile

}) => (

   <div>
      <input id="query" type="text" value={value} onChange={onchange} />
       {" "}
      <button className="btn btn-conf btn-success" onClick={fetchingStem}>
           Stem!
      </button>
      {" "}
       <label>
             <div className="btn btn-conf btn-info">
                File
            </div>
            <input type="file" id="fileInput" style={{ display: "none"}} multiple   onChange={handleFile}/>
        </label>

   </div>
)
export default StemForm
