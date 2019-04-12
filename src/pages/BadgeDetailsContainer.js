import React, { Component } from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api';

class BadgeDetailsContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: null,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const {
      match: {
        params: {
          badgeId,
        },
      },
    } = this.props

    this.setState({
      loading: true,
      error: null,
    })

    try {
      const data = await api.badges.read(badgeId)
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
      error,
    } = this.state

    if (loading) return <PageLoading />

    if (error) return <PageError error={error} />

    const { data } = this.state

    return <BadgeDetails data={data} />
  }
}

export default BadgeDetailsContainer