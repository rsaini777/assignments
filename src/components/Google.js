import jwt_decode from "jwt-decode"
import { useEffect, useState } from "react";
import React from 'react'

function Google({setGooglescreen,googlescreen,user,setUser,googleDivId}) {
    
    const google = window.google;
    function handleCallbackResponse(response){
        var userObject=jwt_decode(response.credential)
        setUser(userObject)
        setGooglescreen(false)
       }
      
       useEffect(()=>{
          google.accounts.id.initialize({
              client_id:"622994508615-mrjc3lmapnvmdgr1p8ge9c5nhm2gqk46.apps.googleusercontent.com",
              callback:handleCallbackResponse
          })
          google.accounts.id.renderButton(
            document.getElementById(`${googleDivId}`),
            {theme:"outline",size:"large"}
        )
       },[])
       
  return (
    <>
      <div id={`${`${googleDivId}`}`}></div>
    </>
  )
}

export default Google