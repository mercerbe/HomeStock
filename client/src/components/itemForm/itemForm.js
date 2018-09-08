import React from 'react'
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
    [theme.breakpoints.up(700 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
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


class itemForm extends React.Component {

  //set inital state for component
  state = {
    //item details here
  }
  //set props
  props = {
    //props passed if needed
  }


  //event handling for state
  //pass events that check the form//

  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline/>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon/>
            </Avatar>
            <Typography variant='headline'>Add an item</Typography>
            <form action="" className={classes.form}>
                  <br/>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className='form-group-label' htmlFor="email">Item</InputLabel>
                  <Input autoComplete='email' autoFocus type="text" name="email" value={this.state.email} onChange={this.updateEmail}/>
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel className='form-group-label' htmlFor="password">Amount</InputLabel>
                  <Input autoComplete='password' autoFocus type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
              </FormControl>
              <Button variant='contained' color='primary' onClick=''>Add Item</Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
    )
  }
}
itemForm.propTypes = {
  classes: PropTypes.object.isRequired,
 }
export default withStyles(styles)(itemForm)
