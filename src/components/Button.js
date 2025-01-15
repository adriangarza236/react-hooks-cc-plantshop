import React from "react";
import { useState } from "react";

function Button() {

 const [ isTrue, setIsTrue ] = useState(true)
   function handleClick() {
     setIsTrue(!isTrue)
   }


    return(
        <>
            {isTrue ? (
            <button onClick={handleClick}  className="primary">In Stock</button>
            ) : (
            <button onClick={handleClick}  >Out of Stock</button>
            )}
        </>
            )
        }


export default Button;