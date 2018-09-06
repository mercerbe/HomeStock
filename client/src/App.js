import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
//pages
import { About } from './About'
import Login from './Login'
import Dashboard from './Dashboard'
//components
import Appbar from './components/appbar'
import Footer from './components/footer'
// utils
import Storage from './utils/Storage'
import Service from './utils/Service'
//Material Baseline
import CssBaseline from '@material-ui/core/CssBaseline'
import Image from 'material-ui-image'
//images
import Logo from './images/logo2.png'

//styles for App


class App extends Component {
  // set initial state
  state={
    loggedIn: false,
  }
  //set props
  props = {}

  componentDidMount() {
    console.log('lifecycle Mount App.js')
    const token = Storage.getToken()
    if (token) {
      Service.get('/api/user')
        .then(({ data }) => {
          // found user
          if (data.success) {
            this.setState({ loggedIn: true })
          }
        })
        .catch(err => console.log('Not authorized'))
    }
  }

  login = ({ data }) => {
    if (data.success) {
      Storage.setToken(data.token)
      this.setState({ loggedIn: true })
      this.props.history.push('/dashboard')
    }
  }
  logout = () => {
    Storage.setToken('')
    this.setState({ loggedIn: false })
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <div className="App" style={{backgroundColor: '#34495e', color: '#ffffff'}}>
        <Appbar logout={this.logout}/>
        <div style={{maxWidth: '400px', maxHeight: '400px', display:'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5px'}}>
        <Image src={Logo} disableTransition= {true}/>
        </div>
        {/* routes */}
        <div className="container">
            <Route exact path='/' render={() => <Login login={this.login}/>} />
            <Route path='/about' render={() => <About loggedIn={this.state.loggedIn}/>} />
            <Route path='/dashboard' render={() => <Dashboard history={this.props.history} loggedIn={this.state.loggedIn} logout={this.logout} login={this.login}/>}/>
        </div>
        <Footer />
      </div>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
