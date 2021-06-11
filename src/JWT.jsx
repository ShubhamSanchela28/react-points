import React, { useEffect } from "react";
import { useJwt } from "react-jwt";
const token = "Your JWT";


    
  

function JWT() {

    useEffect(() => {
        updateToken()
    })
  
    const { decodedToken, isExpired, reEvaluateToken } = useJwt(token);
  
    const updateToken = () => {
      const newToken = "A new JWT";
      reEvaluateToken(newToken); // decodedToken and isExpired will be updated
      console.log(reEvaluateToken)
    }
  return (
    <div>

    </div>
  );
}

export default JWT;
