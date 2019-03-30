import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import './styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import Badge from '../components/Badge';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={'Oscar'}
                lastName={'Zambrano'}
                jobTitle={'Frontend Engineer'}
                twitter={'oscarzz116'}
                avatarUrl={'https://avatars1.githubusercontent.com/u/30606586?s=460&v=4'}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew