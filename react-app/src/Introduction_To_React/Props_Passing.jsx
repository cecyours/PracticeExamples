import React from 'react'

function Button({ text, clickEvent })
{
    return (
        <div>
            <button onClick={clickEvent}>{text}</button>
        </div>
    )
}

const LoginStart =  () =>
{
    console.log("Login Start!");
}

const LogoutStart = () => {
    console.log("Logout start!");
}

function Props_Passing() {
  return (
    <div>
      <Button text = "Login" clickEvent = {LoginStart}></Button>
      <Button text = "Logout" clickEvent = {LogoutStart}></Button>
    </div>
  )
}

export default Props_Passing
