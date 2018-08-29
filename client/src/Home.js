import React from 'react'
//material


export const Home = (props) => (
  <div>
    <h4>HomePage</h4>
    <p>Welcome to the user authentication homepage</p>
    <p>You are currently {props.loggedIn ? 'logged in' : 'not logged in'}</p>
  </div>
)
