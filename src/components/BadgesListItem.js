import React from 'react'
import Gravatar from '../components/Gravatar'
import './styles/BadgesListItem.css';

const BadgesListItem = ({
  email,
  firstName,
  lastName,
  twitter,
  jobTitle,
}) => (
  <div className="BadgesListItem">
    <Gravatar
      className="BadgesListItem__avatar"
      email={email}
    />

    <div>
      <strong>
        {firstName} {lastName}
      </strong>
      <br />@{twitter}
      <br />
      {jobTitle}
    </div>
  </div>
)

export default BadgesListItem