import React from 'react'

function SendToMail({email}) {
    function sentMail(){
     alert(`Successfully sent mail to ${email}`)
    }
  return (
    <>
    <button className='mx-3' onClick={sentMail}>Send Via. Mail</button>
    </>
  )
}

export default SendToMail