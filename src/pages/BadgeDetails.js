import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import confLogo from '../images/platziconf-logo.svg'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'

import './styles/BdegeDetails.css'
import api from '../api';

class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {
      match: {
        params: {
          badgeId,
        },
      },
    } = this.props

    this.setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(badgeId)
      this.setState({
        loading: false,
        data,
      })
    } catch (error) {
      this.setState({
        loading: false,
        error,
      })
    }
  }

  render() {
    const {
      loading,
      error,
    } = this.state

    if (loading) return <PageLoading />

    if (error) return <PageError error={error} />

    const {
      data,
      data: {
        id,
        firstName,
        lastName,
      },
    } = this.state

    return (
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Conf Logo"/>
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{`${firstName} ${lastName}`}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge {...data} />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link className="btn btn-primary mb-4" to={`/badges/${id}/edit`}>
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeDetails