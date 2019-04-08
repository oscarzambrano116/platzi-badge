import React from 'react';
import './styles/PageError.css';

const PageError = ({ error }) => {
  return (
    <div className="PageError">
      ❌{error.message} 😱
    </div>
  )
}

export default PageError;