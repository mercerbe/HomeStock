//dependencies
import React, {Component} from 'react'
import './App.css'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
//components--add index for each component
import SignUp from './components/Signup'
import Menu from './components/menu'
import Login from './components/login'
import Home from './components/home'
import Footer from './components/footer'

class App extends Component {
  //constructor
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }
  //mount
  componentDidMount() {
    this.getUser()
  }
  //update
  updateUser(userObject) {
    this.setState(userObject)
  }
  //getUser
  getUser() {
    axios.get('/user/')
      .then( res => {
        console.log(`user data ${res.data.user}`)
        if(res.data.user) {
          console.log(`user exists as: `)
          this.setState({
            loggedIn: true,
            username: res.data.user.username,
          })
        } else {
          console.log(`No user exists..`)
          this.setState({
            loggedIn: false,
            username: null
          })
        }
      })
  }
  //render all data--todo: render components with data
  render() {
    return (
      <div className="App">
        <Menu />
          <SignUp />
            <Route />
            <Route />
            <Route />
        <Footer />
      </div>
    );
  }
}

export default App;
