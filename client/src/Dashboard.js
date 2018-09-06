
import React from 'react'
import Service from './utils/Service'
import Typography from '@material-ui/core/Typography'
//custom components
import ItemTable from './components/itemTable'

class Dashboard extends React.Component {

  state={
    user: {}
  }

  componentDidMount() {
    Service.get('/api/user')
      .then(response => {
        // successful user info get
        if (response.data.success) {
          this.setState({ user: response.data.user })
        }
      })
      .catch(err => console.log('Not authorized'))
  }

  static getDerivedStateFromProps(props) {
    console.log('lifecycle dashboard')
    if (!props.loggedIn) {
      props.history.push('/')
    }
    return null
  }

  render() {
    const { user: { email } } = this.state
    return (
      <div className="dashboard">
        <Typography>Welcome to your dashboard!</Typography>
        <Typography>Your profile information</Typography>
        <Typography>Email Address: {email}</Typography>
        <ItemTable style={{margin: "1em"}}/>
      </div>
    )
  }
}

export default Dashboard;
