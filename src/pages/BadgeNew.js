import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={header} alt="Conf Logo"/>
            </div>
          </div>
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
      </Fragment>
    )
  }
}

export default BadgeNew