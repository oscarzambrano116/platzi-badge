import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import './styles/BadgeNew.css'

import header from '../images/badge-header.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '', 
    }
  }

  handleFormChange = (e) => {
    const {
      name,
      value,  
    } = e.target

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }))
  }

  render() {
    const {
      form,
      form: {
        firstName,
        lastName,
        jobTitle,
        twitter,
        email,
      },
    } = this.state

    return (
      <div>
        <NavBar />

        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={firstName}
                lastName={lastName}
                jobTitle={jobTitle}
                twitter={twitter}
                email={email}
                avatarUrl={'https://avatars1.githubusercontent.com/u/30606586?s=460&v=4'}
              />
            </div>
            <div className="col-6">
              <BadgeForm 
                handleFormChange={this.handleFormChange}
                {...form} 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew