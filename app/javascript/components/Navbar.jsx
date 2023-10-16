import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import authenticationApi from '../apis/authentication'
import Button from '@material-ui/core/Button'

const handleLogout = async (setIsLoggedIn) => {
  await authenticationApi.logout()
  setIsLoggedIn(false)
  localStorage.removeItem('user')
}

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
          Referrals App
        </Typography>
        <Button color="inherit" onClick={() => handleLogout(setIsLoggedIn)}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
