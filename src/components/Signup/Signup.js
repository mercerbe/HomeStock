import React, {Component} from 'react'
import axios from 'axios'
import './Signup.css'
import {Button, Form, Segment, Container} from 'semantic-ui-react'

class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleSubmit.bind(this)
  }
  //handle change
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  //handleSubmit
  handleSubmit(e) {
    e.preventDefault()
    console.log(`username ${this.state.username}`)
    //axios call to post new user
    axios.post('/user/', {
      username: this.state.username,
      password: this.state.password
    })
      .then( res => {
        console.log(res)
        if(!res.data.errmsg) {
          console.log('congrats, you are all ready to go!')
          this.setState({
            //redirect to login
            redirectTo: '/login'
          })
        } else {
          console.log(`${this.state.username} is already taken`)
          return
        }
      })
      .catch( err => {
        console.log(`error ${err}`)
      })
  }

  //render component
  render(){
    return (
      <Container text>
      <Segment inverted raised>
        <Form inverted>
          <Form.Group widths='equal'>
            <Form.Input fluid label='Username' placeholder='HomeStocker1' type='text' value={this.state.username} onChange={this.handleChange}/>
            <Form.Input fluid label='Password' placeholder='Password' type='password' value={this.state.password} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions'/>
          <Button type='submit' onClick={this.handleSubmit}>Sign Up</Button>
        </Form>
      </Segment>
    </Container>
    )
  }

}

export default SignUp
