import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked })
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleClose = (res) => {
    this.setState({ anchorEl: null })
  };
  closeAndLogout = (e) => {
    this.handleClose()
    this.props.logout()
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <div>
            <IconButton className={classes.menuButton} color="inherit"
            aria-label="Menu"
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup='true'
            onClick={this.handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={this.handleClose}
          >
          <MenuItem onClick={this.handleClose}><Link to='/about' style={{textDecoration: 'none'}}>About</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/' style={{textDecoration: 'none'}}>Login/Register</Link></MenuItem>
          <MenuItem onClick={this.handleClose}><Link to='/dashboard' style={{textDecoration: 'none'}}>Dashboard</Link></MenuItem>
          <MenuItem onClick={this.closeAndLogout}>Logout</MenuItem>
          </Menu>
          </div>
            <Typography variant="title" color="inherit" className={classes.flex}>
              HomeStock
            </Typography>
              <div>
                <IconButton color="inherit">
                  <AccountCircle />
                </IconButton>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuAppBar)
