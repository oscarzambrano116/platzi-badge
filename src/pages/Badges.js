import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import BadgesListItem from '../components/BadgesListItem'
import MiniLoader from '../components/MiniLoader'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import SearchFilter from '../components/SearchFilter'
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
    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
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

  handleOnFilter = (query) => {
    const queryFormatted = query.toLowerCase()
    const { data } = this.state
    const dataFiltered = data.filter(({ firstName, lastName}) => {
      return `${firstName} ${lastName}`.toLowerCase().includes(queryFormatted)
    })

    this.setState((prevState) => ({
      ...prevState,
      data: dataFiltered,
    }))
  }

  render() {
    const {
      loading, 
      data,
      error,
    } = this.state

    if (loading && !data) return <PageLoading />

    if (error) return <PageError error={error} />

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
            <SearchFilter onFilter={this.handleOnFilter} />
            <ul className="list-unstyled">
              {
                data.length ? (
                  data.map((badge) => (
                    <li key={badge.id}>
                      <Link 
                        className="text-reset text-decoration-none" 
                        to={`/badges/${badge.id}`}
                      >
                        <BadgesListItem {...badge} />
                      </Link>
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
            {
              loading && (
                <MiniLoader />
              )
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Badges