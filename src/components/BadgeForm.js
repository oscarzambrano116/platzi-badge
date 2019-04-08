import React, { Component } from 'react'

class BadgeForm extends Component {
  render() {
    const {
      firstName,
      lastName,
      jobTitle,
      email,
      twitter,
      onChange,
      onSubmit,
    } = this.props

    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={onChange} 
              type="text" 
              name="firstName" 
              className="form-control"
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={onChange} 
              type="text" 
              name="lastName" 
              className="form-control"
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={onChange} 
              type="text" 
              name="jobTitle" 
              className="form-control"
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={onChange} 
              type="email" 
              name="email" 
              className="form-control"
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={onChange} 
              type="text" 
              name="twitter" 
              className="form-control"
              value={twitter}
            />
          </div>

          <button onClick={this.onSubmit} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
