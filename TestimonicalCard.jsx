import React from "react";
const TestimonicalCard=({name,feedback})=>{
    return(
        <div style ={{border:"1px solid #ddd",padding:"10px",borderRadiu:"8p", margin:"10px"}}>
           <h1>{name}</h1>
        <p>{feedback}</p>
        </div>
    )

}
export default TestimonicalCard;