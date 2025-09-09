import React from 'react'

function ConditionalRendering({ isLoggedIn }) {
  return (
    <div>
        {isLoggedIn ? "Welcome Back!" : "Please try again!"}
    </div>
  )
}

export default ConditionalRendering
