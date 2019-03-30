import React from 'react'
import './styles/BadgesListItem.css';

const BadgesListItem = ({
  avatarUrl,
  firstName,
  lastName,
  twitter,
  jobTitle,
}) => (
  <div className="BadgesListItem">
    <img
      className="BadgesListItem__avatar"
      src={avatarUrl}
      alt={`${firstName} ${lastName}`}
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