import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom'
//pages
import { Home } from './Home'
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

class App extends Component {
  state={
    loggedIn: false,
  }

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
      this.props.history.push('/')
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
      <div className="App">
        <Appbar/>

        <header className="App-header">
          <h1 className="App-title">HomeStock</h1>
        </header>
        <div className="navbar">
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <span className="fake-link" onClick={this.logout}>Logout</span>
            </li>
          </ul>
        </div>
        <div className="container">
            <Route exact path='/' render={() => <Home loggedIn={this.state.loggedIn}/>} />
            <Route path='/login' render={() => <Login login={this.login}/>} />
            <Route path='/dashboard' render={() => <Dashboard history={this.props.history} loggedIn={this.state.loggedIn}/>}/>
        </div>
        <Footer />
      </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
