import React from 'react'

function SendToMail({email}) {
    function sentMail(){
     alert(`Successfully sent mail to ${email}`)
    }
  return (
    <>
    <button className='mx-3 btn btn-primary btn-lg mb-5' onClick={sentMail}>Send Via. Mail</button>
    </>
  )
}

export default SendToMail