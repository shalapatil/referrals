import React, { useEffect, useState } from 'react'
import List from './referrals/List'
import Navbar from './Navbar'
import Login from './Login'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('user'))
  }, [])

  if (isLoggedIn) {
    return (
      <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <List setIsLoggedIn={setIsLoggedIn} />
      </>
    )
  } else {
    return <Login setIsLoggedIn={setIsLoggedIn} />
  }
}

export default Home
