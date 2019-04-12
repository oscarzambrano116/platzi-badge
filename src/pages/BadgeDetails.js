import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import confLogo from '../images/platziconf-logo.svg'
import Badge from '../components/Badge'

import './styles/BadgeDetails.css'

const BadgeDetails = ({ data }) => {
  const {
    id,
    firstName,
    lastName,
  } = data

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
                  {
                    ReactDOM.createPortal(
                      <h1>Portal Modal</h1>, 
                      document.querySelector('#modal')
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BadgeDetails
