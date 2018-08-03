import React from 'react'
//semantic
import { Container, Segment } from 'semantic-ui-react'

export const Home = (props) => (
  <div>
    <Container text>
      <Segment inverted>
    <h4>HomePage</h4>
    <p>Welcome to the user authentication homepage</p>
    <p>You are currently {props.loggedIn ? 'logged in' : 'not logged in'}</p>
    </Segment>
    </Container>
  </div>
)
