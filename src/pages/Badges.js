import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BadgesListItem from '../components/BadgesListItem'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import api from '../api'
class Badges extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      loading: true,
      error: null,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.list()
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
      data,
      error,
    } = this.state

    if (loading) return 'Loading...'

    if (error) return `Error: ${error.message}`

    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__conf-logo" src={confLogo} alt="Conf Logo"/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <ul className="list-unstyled">
              {
                data.length ? (
                  data.map((badge) => (
                    <li key={badge.id}>
                      <BadgesListItem {...badge} />
                    </li>
                  ))
                ) : (
                  <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badge/new">
                      Create new badges
                    </Link>
                  </div>
                )
              }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges