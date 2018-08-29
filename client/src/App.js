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
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
//images
import Logo from './images/logo_transparent.png'

//styles for App
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}

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
      this.props.history.push('/')
    }
  }

  logout = () => {
    Storage.setToken('')
    this.setState({ loggedIn: false })
    this.props.history.push('/')
  }

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Appbar/>
        <Card className="App-header">
          <CardActionArea>
            <CardMedia
            src={Logo}
            title="HomeStock Logo"
          />
      </CardActionArea>
        </Card>
        {/* routes */}
        <div className="container">
            <Route exact path='/' render={() => <Login login={this.login}/>} />
            <Route path='/about' render={() => <About loggedIn={this.state.loggedIn}/>} />
            <Route path='/dashboard' render={() => <Dashboard history={this.props.history} loggedIn={this.state.loggedIn}/>}/>
        </div>
        <Footer />
      </div>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
 }

export default withRouter(App)
