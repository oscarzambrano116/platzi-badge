import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}
    </Fragment>
  )
}

export default Layout