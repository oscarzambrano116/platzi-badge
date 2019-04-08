import React, { Component, Fragment } from 'react'
import './styles/BadgeNew.css'

import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

import api from '../api'

class BadgeNew extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      twitter: '', 
    }
  }

  handleChange = (e) => {
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

  handleSubmit = async (e) => {
    e.preventDefault()
    const { form } = this.state

    try {
      this.setState({
        loading: true,
        error: null,
      })
      await api.badges.create(form)
      this.setState({ loading: false })
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  }

  render() {
    const {
      form,
    } = this.state

    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge {...form} />
            </div>
            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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