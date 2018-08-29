import React from 'react'
import Service from './utils/Service'
//material UI imports
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'

//styles for page
const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
})


class Login extends React.Component {
  //define constructor
  constructor(props) {
    super(props)
    //add here for class handling
  }
  //set inital state for component
  state = {
    email: '',
    password: '',
    passwordCheck: '',
    createAccount: true,
  }
  //set props
  props = {}


  //event handling for state
  toggleLogin = () => this.setState({ createAccount: ! this.state.createAccount })
  updatePassword = (e) => this.setState({ password: e.target.value })
  updateEmail = (e) => this.setState({ email: e.target.value })
  updatePasswordCheck = (e) => this.setState({ passwordCheck: e.target.value })
  handleLogin = (e) => {
    e.preventDefault()

    Service.post('/api/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(this.props.login)
      .catch(err => console.log(err))
  }
  handleRegistration = (e) => {
    e.preventDefault()
    const { email, password, passwordCheck } = this.state
    console.log('registration', this.state)
    if (email && password !== '' && password === passwordCheck) {
      Service.post('/api/register', {
        email: this.state.email,
        password: this.state.password,
      })
        .then(({ data }) => {
          if (data.success) {
            this.setState({ createAccount: false, email: '', password: '', passwordCheck: '' })
          }
        })
        .catch(err => console.log('Failed registration'))
    }
  }

  render() {
    const passwordsDoNotMatch = this.state.passwordCheck !== '' && this.state.passwordCheck !== this.state.password
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon/>
            </Avatar>
            <Typography variant='headline'>{this.state.createAccount ? 'Register for an account' : 'Login To Existing Account'}</Typography>
            <form action="" className={classes.form}>
              {this.state.createAccount ? <Typography variant='subheading'>Already have an account? <span className='fake-link' onClick={this.toggleLogin}>Click <strong>Here</strong> to Login</span></Typography> :
                <h4>Don't have an account? <span onClick={this.toggleLogin} className='fake-link'>Click Here to create one.</span></h4>}
                  <br/>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className='form-group-label' htmlFor="email">Email</InputLabel>
                  <Input autoComplete='email' autoFocus type="text" name="email" value={this.state.email} onChange={this.updateEmail}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className='form-group-label' htmlFor="password">Password</InputLabel>
                  <Input autoComplete='password' autoFocus type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
              </FormControl>
              {this.state.createAccount &&
                <FormControl margin="normal" required fullWidth>
                <InputLabel className='form-group-label' htmlFor="passwordConfirm">Confirm Password</InputLabel>
                  <Input autoComplete='new-password' autoFocus type="password" name="passwordConfirm" value={this.state.passwordCheck} onChange={this.updatePasswordCheck}/>
              </FormControl> }
              {passwordsDoNotMatch && <div>Your passwords don't match!</div>}
              {!this.state.createAccount ? (
              <Button variant='contained' color='primary' onClick={this.handleLogin}>Login</Button> ) : (
              <Button variant='contained' color='primary' onClick={this.handleRegistration}>Register</Button> )
              }
          </form>
        </Paper>
      </main>
    </React.Fragment>
    )
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
 }
export default withStyles(styles)(Login)


//
// function SignIn(props) {
//   const { classes } = props;
//
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <main className={classes.layout}>
//         <Paper className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <LockIcon />
//           </Avatar>
//           <Typography variant="headline">Sign in</Typography>
//           <form className={classes.form}>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="email">Email Address</InputLabel>
//               <Input id="email" name="email" autoComplete="email" autoFocus />
//             </FormControl>
//             <FormControl margin="normal" required fullWidth>
//               <InputLabel htmlFor="password">Password</InputLabel>
//               <Input
//                 name="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </FormControl>
//             <Button
//               type="submit"
//               fullWidth
//               variant="raised"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign in
//             </Button>
//           </form>
//         </Paper>
//       </main>
//     </React.Fragment>
//   );
// }
//
// SignIn.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(SignIn);
