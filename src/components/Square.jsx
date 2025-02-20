import React from "react";

const Square = (prop)=>{
    return (
       <div 
       onClick={prop.onClick}
       style={{border:'1px solid black' ,
         height: '100px'  ,
          width: '80%',
          display: 'flex' ,
           alignItems: 'center',justifyContent:'center'}}
       className="square">
        <h5> {prop.value} </h5>
       </div> 
    )
}
export default Square;