import React from 'react'
//material


export const About = (props) => (
  <div>
    <h4>How to use HomeStock:</h4>
    <p>You are currently {props.loggedIn ? 'logged in' : 'not logged in'}</p>
    <p>some info and pics here, instructions...</p>
  </div>
)
