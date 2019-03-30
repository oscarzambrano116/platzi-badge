import React, { Component } from 'react'

class BadgeForm extends Component {
  handleClick = (e) => {
    console.log('Button was submitted') 
  }

  handleSubmit = (e) => e.preventDefault()

  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      email,
      twitter,
      handleFormChange,
    } = this.props

    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="firstName" 
              className="form-control"
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="lastName" 
              className="form-control"
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="jobTitle" 
              className="form-control"
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={handleFormChange} 
              type="email" 
              name="email" 
              className="form-control"
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={handleFormChange} 
              type="text" 
              name="twitter" 
              className="form-control"
              value={twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
