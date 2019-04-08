import React from 'react'
import md5 from 'md5'

const Gravatar = ({ email, className }) => {
  const hash = md5(email)
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`

  return (
    <img className={className} src={gravatarUrl} alt={email} />
  )
}

export default Gravatar