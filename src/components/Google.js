import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";
import React from 'react'

function Google() {
    const [user,setUser]=useState({})
    function handleCallbackResponse(response){
        var userObject=jwt_decode(response.credential)
        setUser(userObject)
        document.getElementById("signInDiv").hidden=true
       }
       function handleSignOut(e){
           setUser({})
           document.getElementById("signInDiv").hidden=false
       }
       useEffect(()=>{
         /* global google  */
          google.accounts.id.initialize({
              client_id:"622994508615-mrjc3lmapnvmdgr1p8ge9c5nhm2gqk46.apps.googleusercontent.com",
              callback:handleCallbackResponse
          })
       },[])
       google.accounts.id.renderButton(
           document.getElementById("signInDiv"),
           {theme:"outline",size:"large"}
       )
  return (
    <>
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !=0 ?
        <button onClick={(e)=>handleSignOut(e)}>Sign out</button>:
        null
      }

    </>
  )
}

export default Google