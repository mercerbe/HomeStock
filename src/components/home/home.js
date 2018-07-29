//dependencies
import React, { Component } from 'react'

class Home extends Component {
  constuctor() {
    //pull super
    super()
  }

  //render home
  render() {
    const imageStyle = {
      width: 400
    }
    return (
      <div>
        <p>
          Welcome Home!
        </p>
        <img style={imageStyle} src='' />
      </div>
    )
  }
}

export default Home
