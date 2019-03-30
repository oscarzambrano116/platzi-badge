import React, { Component } from 'react'

class BadgeForm extends Component {
  handleChange = (e) => {
    console.log({ 
      name: e.target.name,
      value: e.target.value 
    })
  }

  handleClick = (e) => {
    console.log('Button was submitted') 
  }

  handleSubmit = (e) => e.preventDefault()

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleChange} type="text" name="firstName" className="form-control"/>
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
